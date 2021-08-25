import Content from 'features/Common/ui/templates/Content'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import Header from '../../../features/Common/ui/organisms/Header'
import CountryCategoryCitizenRequestsContent from '../../../entities/ui/organisms/CitizenPages/CountryCategoryCitizenRequestsContent'
import { Wrapper } from './styles'
import { Container } from 'features/Common/ui/molecules/Grid'

interface CountryCategoryPageCitizenRequestsProps {}

const CountryCategoryPageCitizenRequests: any = (): CountryCategoryPageCitizenRequestsProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <CountryCategoryCitizenRequestsContent />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default CountryCategoryPageCitizenRequests
