import { Wrapper } from './styles'
import { Header } from 'components/Common'
import Content from 'containers/Content'
import SearchForm from 'components/Common/SearchForm'
import { Container } from 'components/Common/Grid'
import LocationCategoryPageCitizenRequestsContent from './Components/LocationCategoryPageCitizenRequestsContent'

interface LocationCategoryPageCitizenRequestsProps {}

const LocationCategoryPageCitizenRequests: any = (): LocationCategoryPageCitizenRequestsProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <LocationCategoryPageCitizenRequestsContent />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default LocationCategoryPageCitizenRequests
