import { FC, FormEvent, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as CommonActions from 'store/common/actions'

import { Wrapper } from './style'

import Typography from 'procredit-bank-design-system/modules/typography'
import Icons from 'procredit-bank-design-system/modules/icons'

const { DownOutlined } = Icons
const { Text } = Typography

const LangSwitcher: FC = () => {
  const { lang } = useSelector(({ common }) => common)

  const dispatch = useDispatch()

  const changeLang = (event: FormEvent, lang: string) => {
    event.preventDefault()
    dispatch(CommonActions.changeLangAction({ lang }))
  }

  return <Wrapper />
}

export default LangSwitcher
