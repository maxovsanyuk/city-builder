import * as React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import Layout from 'procredit-bank-design-system/modules/layout'
import Menu, { IMenuItem } from 'components/Common/Menu'

const { Sider: ProSider } = Layout

const StyledProSider = styled(ProSider).attrs({ theme: 'light' })`
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
const Sider: React.FC<SiderProps> = ({ items }) => {
  const location = useLocation()
  const selectedKeys = [location.pathname]
  return (
    <StyledProSider width={320}>
      <Menu items={items} selectedKeys={selectedKeys} />
    </StyledProSider>
  )
}

export default Sider
