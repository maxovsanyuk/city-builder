import React, { FormEvent } from 'react'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import * as CommonActions from 'store/common/actions'

export const LangSwitcher = () => {
  const dispatch = useDispatch()
  const { formatMessage } = useIntl()

  const { lang } = useSelector(({ common }) => common)

  const changeLang = (event: FormEvent, lang: string) => {
    event.preventDefault()
    dispatch(CommonActions.changeLangAction({ lang }))
  }

  return (
    <div>
      <div>
        {formatMessage({ id: 'currentLanguage' })}:{lang}
      </div>
      <button disabled={lang === 'en'} onClick={e => changeLang(e, 'en')}>
        en
      </button>
      <button disabled={lang === 'ru'} onClick={e => changeLang(e, 'ru')}>
        ru
      </button>
    </div>
  )
}
