import React, { FC } from 'react'
import styled from 'styled-components'
// import Layout from 'procredit-bank-design-system/modules/layout'
import Colors from 'procredit-bank-design-system/modules/colors'
import Row from 'procredit-bank-design-system/modules/row'
import Col from 'procredit-bank-design-system/modules/col'
import LangSwitcher from '../LangSwitcher'
import LogoutButton from './LogoutButton'
import UserProfile from './UserProfile'
import Logo from './Logo'

const { gray } = Colors
// const { Header } = Layout

const HeaderWrapper = styled.div`
  border-bottom: 1px solid ${gray[3]};
`

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${gray[1]};
  padding-left: 24px;
  padding-right: 56px;

  .ant-col {
    display: flex;
    align-items: center;
  }
`

interface HeaderProps {}
const HeaderComponent: FC<HeaderProps> = () => (
  <HeaderWrapper>
    <StyledHeader>
      <Row gutter={16} align="center" wrap={false} style={{ height: 'inherit' }}>
        <Logo />
      </Row>
      <Row gutter={16} align="center" wrap={false}>
        <Col style={{ marginRight: '16px' }}>
          <UserProfile />
        </Col>

        <Col style={{ marginRight: '16px' }}>
          <LangSwitcher />
        </Col>

        <Col>
          <LogoutButton />
        </Col>
      </Row>
    </StyledHeader>
  </HeaderWrapper>
)

export default HeaderComponent
