import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as CommonActions from 'store/common/actions'

import { Icons, Menu, Dropdown, Button } from 'procredit-bank-design-system'

const { DownOutlined } = Icons
const { Item } = Menu

const fancyLang = (lang = '') => {
  switch (lang) {
    case 'en':
      return 'ENG'
    case 'ru':
      return 'RUS'

    default:
      return null
  }
}

const LangSwitcher: FC = () => {
  const { lang } = useSelector(({ common }) => common)
  const dispatch = useDispatch()

  const changeLang = (event: Record<string, string | any>) => {
    dispatch(CommonActions.changeLangAction({ lang: event?.key }))
  }

  const menu = (
    <Menu onClick={changeLang}>
      <Item key="en" disabled={lang === 'en'}>
        Eng
      </Item>
      <Item key="ru" disabled={lang === 'ru'}>
        Rus
      </Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu}>
      <Button type="text">
        {fancyLang(lang)} <DownOutlined />
      </Button>
    </Dropdown>
  )
}

export default LangSwitcher
