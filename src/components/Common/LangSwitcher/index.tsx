import React, { FC, FormEvent } from 'react'
import useComponentVisible from '../../../hooks/useComponentVisible'
import { useDispatch, useSelector } from 'react-redux'
import * as CommonActions from 'store/common/actions'

import { Wrapper } from './style'

// procredit-bank-design-system

import Typography from 'procredit-bank-design-system/modules/typography'
import Icons from 'procredit-bank-design-system/modules/icons'
const { DownOutlined } = Icons
const { Text } = Typography

const LANGUAGES = ['en', 'ru']

export const LangSwitcher: FC = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible()
  const { lang } = useSelector(({ common }) => common)

  const dispatch = useDispatch()

  const changeLang = (event: FormEvent, lang: string) => {
    event.preventDefault()
    dispatch(CommonActions.changeLangAction({ lang }))
  }

  return (
    <Wrapper>
      <div className="current-lang-box" onClick={() => setIsComponentVisible(pr => !pr)} ref={ref}>
        <Text className="lang">{lang}</Text>
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
