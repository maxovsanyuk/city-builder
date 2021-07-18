import { Wrapper } from './styles'
import { Header } from 'components/Common'
import Content from 'containers/Content'
import SearchForm from 'components/Common/SearchForm'
import { Container } from 'components/Common/Grid'
import LocationCategoriesPageContent from './Components/LocationCategoriesPageContent'

interface HomePageProps {}

const LocationCategoriesPage: any = (): HomePageProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <LocationCategoriesPageContent />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default LocationCategoriesPage
