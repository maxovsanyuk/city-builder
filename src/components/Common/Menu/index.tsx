import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ProMenu from 'procredit-bank-design-system/modules/menu'

const { SubMenu: ProSubMenu, Item: ProItem, ItemGroup: ProItemGroup } = ProMenu

const StyledProMenu = styled(ProMenu)`
  & .anticon {
    font-size: 1.125em;
  }
  & .ant-menu-item {
    align-items: center;
    display: flex;
  }
`

interface Item {
  key: string
  title: React.ReactNode
  icon?: React.ReactNode
  href: string
  type: 'item'
}
interface SubMenu {
  key: string
  title: React.ReactNode
  icon?: React.ReactNode
  items: (Item | SubMenu)[]
  type: 'submenu'
}
interface Group {
  title: React.ReactNode
  items: (Item | SubMenu)[]
  type: 'group'
}
export type IMenuItem = Item | SubMenu | Group

const renderItem = (item: IMenuItem) => {
  if (!item) return null

  if (item.type === 'submenu') {
    return (
      <ProSubMenu key={item.key} icon={item.key} title={item.title}>
        {item.items.map(renderItem)}
      </ProSubMenu>
    )
  }
  if (item.type === 'group') {
    return (
      <ProItemGroup key={item.title} title={item.title}>
        {item.items.map(renderItem)}
      </ProItemGroup>
    )
  }
  return (
    <ProItem key={item.href || item.key} icon={item.icon}>
      <Link to={item.href}>{item.title}</Link>
    </ProItem>
  )
}

interface MenuProps {
  items: IMenuItem[]
  defaultSelectedKeys?: string | string[]
  selectedKeys?: string | string[]
  activeKey?: string
  defaultOpenKeys?: string | string[]
  mode?: 'inline' | 'vertical' | 'horizontal'
  onClick?: (key: string) => void
  openKeys?: string[]
}
const Menu: React.FC<MenuProps> = ({ items, defaultSelectedKeys = '1', mode = 'inline', ...props }) => {
  if (!items) return null
  return (
    <StyledProMenu defaultSelectedKeys={defaultSelectedKeys} mode={mode} {...props}>
      {items.map?.(renderItem)}
    </StyledProMenu>
  )
}

export default Menu
