import * as React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import Icons from 'procredit-bank-design-system/modules/icons'
import Menu from 'procredit-bank-design-system/modules/menu'
import Button from 'procredit-bank-design-system/modules/button'
import Dropdown from 'procredit-bank-design-system/modules/dropdown'
import * as CommonActions from 'store/common/actions'

const { Item } = Menu
const { DownOutlined } = Icons

const ButtonInner = styled.span`
  text-transform: uppercase;
  & .anticon {
    font-size: 12px;
    width: 24px;
  }
`

const fancyLang = (lang = '') => {
  if (lang === 'en') return 'Eng'
  if (lang === 'ua') return 'Ukr'
  if (lang === 'ru') return 'Rus'
  return null
}

// Render language selector
interface LanguageSwitcherProps {}
const LanguageSwitcher: React.FC<LanguageSwitcherProps> = () => {
  const dispatch = useDispatch()

  const { lang } = useSelector(({ common }) => common)

  const changeLang = ({ key }: { key: string }) => dispatch(CommonActions.changeLangAction({ lang: key }))

  const menu = (
    <Menu onSelect={changeLang}>
      <Item key="en">Eng</Item>
      <Item key="ua">Ukr</Item>
      <Item key="ru">Rus</Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu}>
      <Button type="text">
        <ButtonInner>
          {fancyLang(lang)} <DownOutlined />
        </ButtonInner>
      </Button>
    </Dropdown>
  )
}

export default LanguageSwitcher
