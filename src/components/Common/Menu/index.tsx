import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Menu from 'procredit-bank-design-system/modules/menu'

const { SubMenu, Item, ItemGroup } = Menu

const StyledMenu = styled(Menu)`
  & .anticon {
    font-size: 1.125em;
  }
  & .ant-menu-item {
    align-items: center;
    display: flex;
  }
`

export interface IItem {
  id: string
  title: ReactNode
  icon?: ReactNode
  href: string
  type: 'item'
}
export interface ISubMenu {
  id: string
  title: ReactNode
  icon?: ReactNode
  items: (IItem | ISubMenu)[]
  type: 'submenu'
}
export interface IGroup {
  id: string
  title: ReactNode
  items: (IItem | ISubMenu)[]
  type: 'group'
}
export type IMenuItem = IItem | ISubMenu | IGroup

const renderItem = (item: IMenuItem) => {
  if (!item) return null

  if (item.type === 'submenu') {
    return (
      <SubMenu key={item.id} icon={item.icon} title={item.title}>
        {item.items.map(renderItem)}
      </SubMenu>
    )
  }
  if (item.type === 'group') {
    return (
      <ItemGroup key={item.id} title={item.title}>
        {item.items.map(renderItem)}
      </ItemGroup>
    )
  }
  return (
    <Item key={item.id} icon={item.icon}>
      <Link to={item.href}>{item.title}</Link>
    </Item>
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
const MenuComponent: FC<MenuProps> = ({ items, defaultSelectedKeys = '1', mode = 'inline', ...props }) => {
  if (!items) return null
  return (
    <StyledMenu defaultSelectedKeys={defaultSelectedKeys} mode={mode} {...props}>
      {items.map?.(renderItem)}
    </StyledMenu>
  )
}

export default MenuComponent
