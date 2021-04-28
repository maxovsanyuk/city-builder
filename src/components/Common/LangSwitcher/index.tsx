import { FC, FormEvent } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import * as CommonActions from 'store/common/actions'

// import Icons from 'procredit-bank-design-system/modules/icons'
// import Menu from 'procredit-bank-design-system/modules/menu'
// import Dropdown from 'procredit-bank-design-system/modules/dropdown'
// import Button from 'procredit-bank-design-system/modules/button'

// const { DownOutlined } = Icons
// const { Item } = Menu

// const fancyLang = (lang = '') => {
//   switch (lang) {
//     case 'en':
//       return 'ENG'
//     case 'ru':
//       return 'RUS'
//
//     default:
//       return null
//   }
//
//   return null
// }

const LangSwitcher: FC = () => {
  // const { lang } = useSelector(({ common }) => common)
  // const dispatch = useDispatch()
  //
  // const changeLang = (event: FormEvent, lang: string) => {
  //   event.preventDefault()
  //   dispatch(CommonActions.changeLangAction({ lang }))
  // }

  // const menu = (
  //   <Menu onSelect={changeLang}>
  //     <Item key="en">Eng</Item>
  //     <Item key="ru">Rus</Item>
  //   </Menu>
  // )

  return <div />
  // <Dropdown overlay={menu}>
  //   <Button type="text">
  //     {fancyLang(lang)} <DownOutlined />
  //   </Button>
  // </Dropdown>
}

export default LangSwitcher
