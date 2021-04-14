import React from 'react'
import Layout from 'procredit-bank-design-system/modules/layout'
import { DefaultLayout } from 'settings/layouts'
import { IMenuItem } from 'components/Common/Menu'
import Header from 'components/Common/Header'
import { Wrapper } from './style'
import Sider from './Sider'

const { Content } = Layout

interface PlatformLayoutProps {
  items?: IMenuItem[]
}
const PlatformLayout: React.FC<PlatformLayoutProps> = ({ children, items = DefaultLayout.items }) => (
  <Wrapper>
    <Header />
    <Layout>
      <Sider items={items} />
      <Content>{children}</Content>
    </Layout>
  </Wrapper>
)

export default PlatformLayout
