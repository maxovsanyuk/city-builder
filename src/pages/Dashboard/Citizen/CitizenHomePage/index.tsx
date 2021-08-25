import SearchForm from 'features/Common/ui/organisms/SearchForm'
import Content from '../../../../features/Common/ui/templates/Content'
import TopAdvertisements from '../../../../features/Common/ui/organisms/TopAdvertisements'
import MostPopularInCountry from '../../../../entities/ui/organisms/HomePage/MostPopularInCountry'
import MostPopularInCategory from '../../../../entities/ui/organisms/HomePage/MostPopularInCitizenRequests'
import { Container } from 'features/Common/ui/molecules/Grid'

const CitizrnHomePage = () => {
  return (
    <Container>
      <Content>
        <SearchForm />
        <MostPopularInCountry />
        <MostPopularInCategory />
        <TopAdvertisements />
      </Content>
    </Container>
  )
}

export default CitizrnHomePage
