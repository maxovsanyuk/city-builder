import { Wrapper } from './styles'
import { Header } from 'shared/ui/organisms'
import { Content } from 'shared/ui/templates'
import { Container, SearchForm } from 'shared/ui/molecules'
import { LocationCategoryContent } from 'entities/ui/organisms'

interface HomePageProps {}

const LocationCategoryPage: any = (): HomePageProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <LocationCategoryContent />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default LocationCategoryPage
