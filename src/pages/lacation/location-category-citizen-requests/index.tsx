import { Wrapper } from './styles'
import { Content } from 'shared/ui/templates'
import { Footer, Header } from 'shared/ui/organisms'
import { Container, SearchForm } from 'shared/ui/molecules'
import { LocationCategoryCitizenRequestsContent } from 'entities/ui/organisms'

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
      <Footer />
    </Wrapper>
  )
}

export default LocationCategoryPageCitizenRequests
