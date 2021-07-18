import { Wrapper } from './styles'
import { Header } from 'components/Common'
import Content from 'containers/Content'
import SearchForm from 'components/Common/SearchForm'
import { Container } from 'components/Common/Grid'
import CountryCategoryPageContent from './Components/CountryCategoryPageContent'

interface CountryCategoryPageProps {}

const CountryCategoryPage: any = (): CountryCategoryPageProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <CountryCategoryPageContent />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default CountryCategoryPage
