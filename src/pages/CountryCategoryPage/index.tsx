import { Wrapper } from './styles'
import Content from 'features/Common/ui/templates/Content'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import { Container } from 'features/Common/ui/molecules/Grid'
import CountryCategoryContent from '../../entities/ui/organisms/CountryCategoryPage/CountryCategoryContent'
import Header from '../../features/Common/ui/organisms/Header'

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
