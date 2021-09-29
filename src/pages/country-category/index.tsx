import { Wrapper } from './styles'
import { Content } from 'shared/ui/templates'
import { Footer, Header } from 'shared/ui/organisms'
import { Container, SearchForm } from 'shared/ui/molecules'
import { CountryCategoryContent } from 'entities/ui/organisms'

interface CountryCategoryPageProps {}

const CountryCategoryPage: any = (): CountryCategoryPageProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <CountryCategoryContent />
        </Content>
      </Container>
      <Footer />
    </Wrapper>
  )
}

export default CountryCategoryPage
