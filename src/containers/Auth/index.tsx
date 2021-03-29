import React, { FC } from 'react'
import { Row } from 'procredit-bank-design-system'
import { Wrapper } from './style'

const AuthLayout: FC = ({ children }) => {

  return (
    <Wrapper>
      <Row>test row</Row>
      {children}
    </Wrapper>
  )
}

export default AuthLayout
