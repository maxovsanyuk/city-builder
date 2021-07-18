import { Wrapper } from './styles'
import { Header } from 'components/Common'
import Content from 'containers/Content'
import SearchForm from 'components/Common/SearchForm'
import { Container } from 'components/Common/Grid'
import CountryCategoryPageEntrepreneurRequestsContent from './Components/CountryCategoryPageEntrepreneurRequestsContent'

interface CountryCategoryPageEntrepreneurRequestsProps {}

const CountryCategoryPageEntrepreneurRequests: any = (): CountryCategoryPageEntrepreneurRequestsProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <CountryCategoryPageEntrepreneurRequestsContent />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default CountryCategoryPageEntrepreneurRequests
