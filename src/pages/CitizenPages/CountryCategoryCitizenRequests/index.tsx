import { Wrapper } from './styles'
import Header from '../../../features/Common/ui/organisms/Header'
import Content from 'features/Common/ui/templates/Content'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import { Container } from 'features/Common/ui/molecules/Grid'
import CountryCategoryCitizenRequestsContent from '../../../entities/ui/organisms/CitizenPages/CountryCategoryCitizenRequestsContent'

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
