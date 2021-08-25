import Content from 'features/Common/ui/templates/Content'
import Header from '../../features/Common/ui/organisms/Header'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import CountryCategoryContent from '../../entities/ui/organisms/CountryCategoryPage/CountryCategoryContent'
import { Wrapper } from './styles'
import { Container } from 'features/Common/ui/molecules/Grid'

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
