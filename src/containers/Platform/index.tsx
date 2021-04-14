import React from 'react'
import styled from 'styled-components'
import Layout from 'procredit-bank-design-system/modules/layout'
import { DefaultLayout } from 'settings/layouts'
import { IMenuItem } from 'components/Common/Menu'
import Header from 'components/Common/Header'
import { Wrapper } from './style'
import Sider from './Sider'

const { Content } = Layout

const StyledContent = styled(Content)`
  background-color: var(--color-gray-2);
  display: flex;
  flex-direction: column;
  position: relative;
`
interface PlatformLayoutProps {
  items?: IMenuItem[]
}
const PlatformLayout: React.FC<PlatformLayoutProps> = ({ children, items = DefaultLayout.items }) => (
  <Wrapper>
    <Header />
    <Layout>
      <Sider items={items} />
      <StyledContent>{children}</StyledContent>
    </Layout>
  </Wrapper>
)

export default PlatformLayout
