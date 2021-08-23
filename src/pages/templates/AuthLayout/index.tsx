import Header from '../../../features/Common/ui/organisms/Header'
import Footer from '../../../features/Common/ui/organisms/Footer'
import { FC } from 'react'
import { Wrapper } from './style'
import { useLocation } from 'react-router'
import { Container } from 'features/Common/ui/molecules/Grid'

const AuthLayout: FC = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <Wrapper>
      <Header disableLoginBtn={pathname === '/login'} />
      <Container>
        <div className="children">{children}</div>
      </Container>
      <Footer />
    </Wrapper>
  )
}

export default AuthLayout
