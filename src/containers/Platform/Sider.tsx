import * as React from 'react'
import styled from 'styled-components'
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
  return (
    <StyledProSider width={320}>
      <Menu items={items} />
    </StyledProSider>
  )
}

export default Sider
