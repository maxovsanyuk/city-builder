import { Wrapper } from './styles'
import Content from 'features/Common/ui/templates/Content'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import { Container } from 'features/Common/ui/molecules/Grid'
import LocationCategoryPageEntrepreneurRequestsContent from '../../../entities/ui/organisms/LocationsPages/LocationCategoryEntrepreneurRequestsContent'
import Header from '../../../features/Common/ui/organisms/Header'

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
