import { Wrapper } from './styles'
import Content from 'features/Common/ui/templates/Content'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import { Container } from 'features/Common/ui/molecules/Grid'
import LocationCategoriesContent from '../../../entities/ui/organisms/LocationsPages/LocationCategories/LocationCategoriesContent'
import Header from '../../../features/Common/ui/organisms/Header'

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
