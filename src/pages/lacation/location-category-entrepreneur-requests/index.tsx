import { Wrapper } from './styles'
import { Header } from 'shared/ui/organisms'
import { Content } from 'shared/ui/templates'
import { Container, SearchForm } from 'shared/ui/molecules'
import { LocationCategoryEntrepreneurRequestsContent } from 'entities/ui/organisms'

interface LocationCategoryPageEntrepreneurRequestsProps {}

const LocationCategoryPageEntrepreneurRequests: any = (): LocationCategoryPageEntrepreneurRequestsProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <LocationCategoryEntrepreneurRequestsContent />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default LocationCategoryPageEntrepreneurRequests
