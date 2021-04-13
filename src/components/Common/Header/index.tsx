import * as React from 'react'
import styled from 'styled-components'
import Layout from 'procredit-bank-design-system/modules/layout'
import Row from 'procredit-bank-design-system/modules/row'
import Col from 'procredit-bank-design-system/modules/col'
import LangSwitcher from '../LangSwitcher'
import LogoutButton from './LogoutButton'
import UserProfile from './UserProfile'
import Logo from './Logo'

const { Header: ProHeader } = Layout

const HeaderWrapper = styled.div`
  border-bottom: 1px solid var(--color-gray-3);
`

const StyledProHeader = styled(ProHeader)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 56px;
`

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderWrapper>
      <StyledProHeader>
        <Row gutter={16} align="center" wrap={false} style={{ height: 'inherit' }}>
          <Logo />
        </Row>
        <Row gutter={16} align="center" wrap={false}>
          <Col style={{ marginRight: '16px' }}>
            <UserProfile />
          </Col>
          <Col>
            <LangSwitcher />
          </Col>
          <Col>
            <LogoutButton />
          </Col>
        </Row>
      </StyledProHeader>
    </HeaderWrapper>
  )
}

export default Header
