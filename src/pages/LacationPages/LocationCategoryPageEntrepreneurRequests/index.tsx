import Content from 'features/Common/ui/templates/Content'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import Header from '../../../features/Common/ui/organisms/Header'
import { Wrapper } from './styles'
import LocationCategoryPageEntrepreneurRequestsContent from '../../../entities/ui/organisms/LocationsPages/LocationCategoryEntrepreneurRequestsContent'
import { Container } from 'features/Common/ui/molecules/Grid'

interface LocationCategoryPageEntrepreneurRequestsProps {}

const LocationCategoryPageEntrepreneurRequests: any = (): LocationCategoryPageEntrepreneurRequestsProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <LocationCategoryPageEntrepreneurRequestsContent />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default LocationCategoryPageEntrepreneurRequests
