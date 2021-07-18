import { Wrapper } from './styles'
import { Header } from 'components/Common'
import Content from 'containers/Content'
import SearchForm from 'components/Common/SearchForm'
import { Container } from 'components/Common/Grid'
import LocationCategoryPageContent from './Components/LocationCategoryPageContent'

interface HomePageProps {}

const LocationCategoryPage: any = (): HomePageProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <LocationCategoryPageContent />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default LocationCategoryPage
