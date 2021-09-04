import { Wrapper } from './styles'
import { Header } from 'shared/ui/organisms'
import { Content } from 'shared/ui/templates'
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
    </Wrapper>
  )
}

export default LocationCategoryPageCitizenRequests
