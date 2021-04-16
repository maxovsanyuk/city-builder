import React, { FC } from 'react'
import styled from 'styled-components'
import Layout from 'procredit-bank-design-system/modules/layout'
import Colors from 'procredit-bank-design-system/modules/colors'
import { DefaultLayout } from 'settings/layouts'
import { IMenuItem } from 'components/Common/Menu'
import Header from 'components/Common/Header'
import { Wrapper } from './style'
import Sider from './Sider'

const { Content } = Layout
const { gray } = Colors

const StyledContent = styled(Content)`
  background-color: ${gray[2]};
  display: flex;
  flex-direction: column;
  position: relative;
`
interface PlatformLayoutProps {
  items?: IMenuItem[]
}
const PlatformLayout: FC<PlatformLayoutProps> = ({ children, items = DefaultLayout.items }) => (
  <Wrapper>
    <Header />
    <Layout>
      <Sider items={items} />
      <StyledContent>{children}</StyledContent>
    </Layout>
  </Wrapper>
)

export default PlatformLayout
