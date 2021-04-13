import React from 'react'
import LangSwitcher from '../../components/Common/LangSwitcher'

import { Wrapper } from './style'

const AuthLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <div className="header">
        <LangSwitcher />
      </div>
      <div className="children">{children}</div>
    </Wrapper>
  )
}

export default AuthLayout
