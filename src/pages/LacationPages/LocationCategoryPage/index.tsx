import { Wrapper } from './styles'
import Content from 'features/Common/ui/templates/Content'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import { Container } from 'features/Common/ui/molecules/Grid'
import LocationCategoryContent from '../../../entities/ui/organisms/LocationsPages/LocationCategoryContent'
import Header from '../../../features/Common/ui/organisms/Header'

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
