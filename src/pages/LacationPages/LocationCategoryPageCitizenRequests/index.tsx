import { Wrapper } from './styles'
import Content from 'features/Common/ui/templates/Content'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import { Container } from 'features/Common/ui/molecules/Grid'
import LocationCategoryCitizenRequestsContent from '../../../entities/ui/organisms/LocationsPages/LocationCategoryCitizenRequestsContent'
import Header from '../../../features/Common/ui/organisms/Header'

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
