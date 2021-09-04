import { Wrapper } from './styles'
import { Header } from 'shared/ui/organisms'
import { Content } from 'shared/ui/templates'
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
    </Wrapper>
  )
}

export default LocationCategoriesPage
