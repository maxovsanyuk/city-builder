import { Wrapper } from './styles'
import { Header } from 'components/Common'
import Content from 'containers/Content'
import SearchForm from 'components/Common/SearchForm'
import { Container } from 'components/Common/Grid'
import CountryCategoryPageCitizenRequestsContent from './Components/CountryCategoryPageCitizenRequestsContent'

interface CountryCategoryPageCitizenRequestsProps {}

const CountryCategoryPageCitizenRequests: any = (): CountryCategoryPageCitizenRequestsProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <CountryCategoryPageCitizenRequestsContent />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default CountryCategoryPageCitizenRequests
