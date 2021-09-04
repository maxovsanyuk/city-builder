import { Wrapper } from './styles'
import { Header } from 'shared/ui/organisms'
import { Content } from 'shared/ui/templates'
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
    </Wrapper>
  )
}

export default CountryCategoryPage
