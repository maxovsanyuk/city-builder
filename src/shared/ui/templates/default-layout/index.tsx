import { FC } from 'react'
import { Wrapper } from './style'
import { Content } from 'shared/ui/templates'
import { Container } from 'shared/ui/molecules/grid'
import { Footer, Header } from 'shared/ui/organisms'

export const DefaultLayout: FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>{children}</Content>
      </Container>
      <Footer />
    </Wrapper>
  )
}
