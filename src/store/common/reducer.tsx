import { ActionType } from './model'
import { Action } from '../model'
import createReducer from '../createReducer'

export interface CommonReducerType {
  lang: string
}

const defaultState: CommonReducerType = {
  lang: 'en',
}

export const commonReducer = createReducer<CommonReducerType>(defaultState, {
  [ActionType.SET_LANG](state: CommonReducerType, action: Action<number>) {
    return { ...state, lang: action.payload }
  },
})
