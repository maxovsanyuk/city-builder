import { Wrapper } from './styles'
import { Content } from 'shared/ui/templates'
import { Footer, Header } from 'shared/ui/organisms'
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
      <Footer />
    </Wrapper>
  )
}

export default LocationCategoryPage
