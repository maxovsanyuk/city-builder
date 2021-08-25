/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createApi, createStore, is, sample, createEvent, Effect, Store, forward } from 'effector'
import { debounce } from 'patronum/debounce'

type Value = string | number | boolean | unknown

interface IPaginationProps {
  defaultLimit: number
  effect?: Effect<any, any, any>
  params: Store<Record<string, Value | Value[]>>
}

interface MetaProps {
  sid?: string
  name?: string
}

export const createPaginationModel = (
  { defaultLimit = 10, effect, params }: IPaginationProps,
  { sid, name }: MetaProps = {}
) => {
  if (!effect && !is.effect(effect)) {
    throw new TypeError('Argument (effect) must have effect property')
  }

  if (!is.store(params)) {
    throw new TypeError('Argument (params) must be store or object of stores')
  }

  // Events
  const reset = createEvent()
  const onChangeSearch = createEvent()
  const onChangeOrigin = createEvent()

  const initialState = {
    limit: defaultLimit,
    page: 1,
    totalPages: 1,
    total: 0,
    isLast: false,
  }
  // END: static default params

  // Stores
  const $pagination = createStore(initialState, {
    name: `${name}.$pagination`,
    sid: `modelValue${sid}`,
  })

  const $searchValue = createStore('', {
    name: `${name}.$search`,
    sid: `modelValue${sid}`,
  })

  const $params = params

  const $currentPage = $pagination.map(state => state.page)
  const $currentPageIndex = $pagination.map(state => state.page - 1)
  const $limit = $pagination.map(state => state.limit)
  const $totalPages = $pagination.map(state => state.totalPages)
  const $total = $pagination.map(state => state.total)
  const $isLast = $pagination.map(state => state.isLast)

  const api = createApi($pagination, {
    nextPage: state => {
      if (state.page + 1 > state.totalPages) return state
      return { ...state, page: state.page + 1 }
    },
    prevPage: state => {
      if (state.page - 1 < 1) return state
      return { ...state, page: state.page - 1 }
    },
    setPage: (state, page: number) => ({ ...state, page }),
    setPageByIndex: (state, pageIndex: number) => ({
      ...state,
      page: pageIndex + 1,
    }),
    setLimit: (state, limit: number) => ({ ...state, limit, page: 1 }),
    resetPage: state => ({ ...state, page: 1 }),
  })

  // START: search with debounced
  sample({
    source: debounce({ source: onChangeSearch, timeout: 200 }),
    target: onChangeOrigin,
  })

  $searchValue.on(onChangeOrigin, (_, value) => value).reset(reset)
  // END: search with debounced

  forward({
    from: onChangeOrigin,
    to: api.resetPage,
  })

  forward({
    from: $params.updates,
    to: api.resetPage,
  })

  // START: trigger launch effect
  sample({
    source: {
      search: $searchValue,
      limit: $limit,
      page: $currentPage,
      params: $params,
    },
    fn: state => ({
      search: state.search || undefined,
      limit: state.limit,
      page: state.page,
      ...Object.entries(state.params).reduce((acc, [key, value]) => ({ ...acc, [key]: value || undefined }), {}),
    }),
    target: effect,
  })
  // END: trigger launch effect

  $pagination
    .on(effect.doneData, (state, rawData) => ({
      ...state,
      isLast: rawData.answer.data.isLast,
      totalPages: rawData.answer.data.totalPages,
      total: rawData.answer.data.total,
    }))
    .reset(reset)

  return {
    // Public stores
    $pagination,
    $limit,
    $total,
    $currentPage,
    $currentPageIndex,
    $totalPages,
    $isLast,
    $searchValue,
    // Public events
    nextPage: api.nextPage,
    prevPage: api.prevPage,
    setLimit: api.setLimit,
    setPage: api.setPage,
    setPageByIndex: api.setPageByIndex,
    onChangeSearch,
    reset,
  }
}
