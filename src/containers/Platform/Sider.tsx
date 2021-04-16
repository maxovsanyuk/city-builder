import React, { FC, useMemo } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import Colors from 'procredit-bank-design-system/modules/colors'
import Layout from 'procredit-bank-design-system/modules/layout'
import Menu, { IMenuItem, IItem } from 'components/Common/Menu'

const { gray } = Colors
const { Sider } = Layout

const StyledSider = styled(Sider).attrs({ theme: 'light' })`
  border-right: 2px solid ${gray[3]};
  & > .ant-layout-sider-children {
    padding-top: 20px;
    padding-bottom: 20px;
    width: calc(100% + 2px);
  }
`

// Unwrap menuItems from subMenus and groups
const getMenuItems = (item: IMenuItem): IItem[] => {
  if (!item) return []
  if (item.type === 'group' || item.type === 'submenu') return item.items.map(getMenuItems).flat()
  if (item.type === 'item') return [item]
  return []
}

interface SiderProps {
  items: IMenuItem[]
}
const SiderComponent: FC<SiderProps> = ({ items }) => {
  const { pathname } = useLocation()

  // Find id of matching menuItems
  const selectedKeys = useMemo(() => {
    const menuItems = items.map(getMenuItems).flat()
    const matchedItems = menuItems.filter(i => i?.href === pathname)
    const ids = matchedItems.map(i => i.id)
    return ids
  }, [items, pathname])

  return (
    <StyledSider width={320}>
      <Menu items={items} selectedKeys={selectedKeys} />
    </StyledSider>
  )
}

export default SiderComponent
