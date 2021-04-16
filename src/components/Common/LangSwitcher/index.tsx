import React, { FC, FormEvent, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as CommonActions from 'store/common/actions'

import { Wrapper } from './style'

// procredit-bank-design-system

import Typography from 'procredit-bank-design-system/modules/typography'
import Icons from 'procredit-bank-design-system/modules/icons'
const { DownOutlined } = Icons
const { Text } = Typography

const LANGUAGES_CONFIG = [
  { type: 'en', name: 'Eng' },
  { type: 'ru', name: 'Rus' },
]

const fancyLang = (lang: string) => {
  switch (lang) {
    case 'en':
      return 'ENG'
    case 'ru':
      return 'Rus'

    default:
      return null
  }
}

function useComponentVisible() {
  const [isComponentVisible, setIsComponentVisible] = useState<boolean>(false)
  const ref = useRef<HTMLHeadingElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLHeadingElement)) {
      setIsComponentVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref, isComponentVisible, setIsComponentVisible }
}

const LangSwitcher: FC = () => {
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
        <Text className="lang">{fancyLang(lang)}</Text>
        <DownOutlined className={isComponentVisible && 'rotate-arrow'} />
        {isComponentVisible && (
          <div className="options-cont">
            {LANGUAGES_CONFIG.map(({ type, name }: any) => (
              <button
                className={`option ${lang === type && 'selected-lang'}`}
                key={type}
                disabled={lang === type}
                onClick={e => changeLang(e, type)}
              >
                {name}
              </button>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default LangSwitcher
