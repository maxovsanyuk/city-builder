import { FC } from 'react'
import { Wrapper } from './style'
import { Footer, Header } from 'shared/ui/organisms'
import { Container } from 'shared/ui/molecules/grid'

export const AuthLayout: FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <div className="children">{children}</div>
      </Container>
      <Footer />
    </Wrapper>
  )
}
