import { FC } from 'react'
import { Wrapper } from './style'
import { Container } from 'components/Common/Grid'
import { Footer, Header } from 'components/Common'

const AuthLayout: FC = ({ children }) => {
  return (
    <Wrapper>
      <Header disableLoginBtn />
      <Container>
        <div className="children">{children}</div>
      </Container>
      <Footer />
    </Wrapper>
  )
}

export default AuthLayout
