import React from 'react'
import Layout from 'procredit-bank-design-system/modules/layout'
import Icons from 'procredit-bank-design-system/modules/icons'
import Header from 'components/Common/Header'
import { IMenuItem } from 'components/Common/Menu'
import { Wrapper } from './style'
import Sider from './Sider'

const { Content } = Layout

const {
  TeamOutlined,
  CreditCardOutlined,
  UserAddOutlined,
  HomeOutlined,
  PieChartOutlined,
  FileTextOutlined,
  WalletOutlined,
  AuditOutlined,
  IdcardOutlined,
} = Icons

const mockItems1: IMenuItem[] = [
  { key: '1', title: 'Home', icon: <HomeOutlined />, type: 'item' },
  { key: '2', title: 'Financial transaction', icon: <PieChartOutlined />, type: 'item' },
  { key: '3', title: 'Managing authorizations', icon: <TeamOutlined />, type: 'item' },
  { key: '4', title: 'Managing documents', icon: <FileTextOutlined />, type: 'item' },
  { key: '5', title: 'Managing POS terminals', icon: <WalletOutlined />, type: 'item' },
  { key: '6', title: 'Documents signing', icon: <AuditOutlined />, type: 'item' },
  { key: '7', title: 'Managing Business Cards', icon: <IdcardOutlined />, type: 'item' },
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockItems2: IMenuItem[] = [
  { key: '1', title: 'Authorizations', icon: <TeamOutlined />, type: 'item' },
  { key: '2', title: 'Accounts', icon: <CreditCardOutlined />, type: 'item' },
  { key: '3', title: 'Modifications', icon: <UserAddOutlined />, type: 'item' },
]

const PlatformLayout: React.FC = ({ children }) => {
  const items = mockItems1
  return (
    <Wrapper>
      <Header />
      <Layout>
        <Sider items={items} />
        <Content>{children}</Content>
      </Layout>
    </Wrapper>
  )
}

export default PlatformLayout
