import * as React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import Layout from 'procredit-bank-design-system/modules/layout'
import Menu, { IMenuItem } from 'components/Common/Menu'

const { Sider } = Layout

const StyledSider = styled(Sider).attrs({ theme: 'light' })`
  border-right: 2px solid var(--color-gray-3);
  & > .ant-layout-sider-children {
    padding-top: 20px;
    padding-bottom: 20px;
    width: calc(100% + 2px);
  }
`

interface SiderProps {
  items: IMenuItem[]
}
const SiderComponent: React.FC<SiderProps> = ({ items }) => {
  const location = useLocation()
  const selectedKeys = [location.pathname]
  return (
    <StyledSider width={320}>
      <Menu items={items} selectedKeys={selectedKeys} />
    </StyledSider>
  )
}

export default SiderComponent
