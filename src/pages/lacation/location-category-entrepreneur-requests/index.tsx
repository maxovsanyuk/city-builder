import { Wrapper } from './styles'
import { Content } from 'shared/ui/templates'
import { Footer, Header } from 'shared/ui/organisms'
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
      <Footer />
    </Wrapper>
  )
}

export default LocationCategoryPageEntrepreneurRequests
