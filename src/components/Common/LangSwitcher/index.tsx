import React, { FormEvent } from 'react'
import useComponentVisible from '../../../hooks/useComponentVisible'
import { useDispatch, useSelector } from 'react-redux'
import * as CommonActions from 'store/common/actions'

import { Wrapper } from './style'

// procredit-bank-design-system

import Icons from 'procredit-bank-design-system/modules/icons'
const { DownOutlined } = Icons

const LANGUAGES = ['en', 'ru']

export const LangSwitcher = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible()

  const dispatch = useDispatch()

  const { lang } = useSelector(({ common }) => common)

  const changeLang = (event: FormEvent, lang: string) => {
    event.preventDefault()
    dispatch(CommonActions.changeLangAction({ lang }))
  }

  return (
    <Wrapper ref={ref}>
      <div className="current-lang-box" onClick={() => setIsComponentVisible(pr => !pr)}>
        <div className="lang">{lang}</div>
        <DownOutlined />

        {isComponentVisible && (
          <div className="options-cont">
            {LANGUAGES.map(el => (
              <button
                className={`option ${lang === el && 'selected-lang'}`}
                key={el}
                disabled={lang === el}
                onClick={e => changeLang(e, el)}
              >
                {el}
              </button>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  )
}
