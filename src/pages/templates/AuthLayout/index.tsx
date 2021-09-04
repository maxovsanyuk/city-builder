import { FC } from 'react'
import { Wrapper } from './style'
import { useLocation } from 'react-router'
import { Footer, Header } from 'shared/ui/organisms'
import { Container } from 'shared/ui/molecules/Grid'

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
