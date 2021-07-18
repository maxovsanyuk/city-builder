import { Wrapper } from './styles'
import { Header } from 'components/Common'
import Content from 'containers/Content'
import SearchForm from 'components/Common/SearchForm'
import { Container } from 'components/Common/Grid'
import LocationCategoryPageEntrepreneurRequestsContent from './Components/LocationCategoryPageEntrepreneurRequestsContent'

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



