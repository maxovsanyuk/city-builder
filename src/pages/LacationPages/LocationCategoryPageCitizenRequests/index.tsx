import Content from 'features/Common/ui/templates/Content'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import Header from '../../../features/Common/ui/organisms/Header'
import { Wrapper } from './styles'
import LocationCategoryCitizenRequestsContent from '../../../entities/ui/organisms/LocationsPages/LocationCategoryCitizenRequestsContent'
import { Container } from 'features/Common/ui/molecules/Grid'

interface LocationCategoryPageCitizenRequestsProps {}

const LocationCategoryPageCitizenRequests: any = (): LocationCategoryPageCitizenRequestsProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <LocationCategoryCitizenRequestsContent />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default LocationCategoryPageCitizenRequests
