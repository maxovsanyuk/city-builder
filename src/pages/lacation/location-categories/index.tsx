import { Wrapper } from './styles'
import { Content } from 'shared/ui/templates'
import { Footer, Header } from 'shared/ui/organisms'
import { SearchForm, Container } from 'shared/ui/molecules'
import { LocationCategoriesContent } from 'entities/ui/organisms'

interface HomePageProps {}

const LocationCategoriesPage: any = (): HomePageProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <LocationCategoriesContent />
        </Content>
      </Container>
      <Footer />
    </Wrapper>
  )
}

export default LocationCategoriesPage
