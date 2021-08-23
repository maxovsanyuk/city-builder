import SearchForm from 'features/Common/ui/organisms/SearchForm'
import MostPopularInCountry from '../../../../entities/ui/organisms/HomePage/MostPopularInCountry'
import MostPopularInCategory from '../../../../entities/ui/organisms/HomePage/MostPopularInCitizenRequests'
import Content from '../../../../features/Common/ui/templates/Content'
import { Container } from 'features/Common/ui/molecules/Grid'
import TopAdvertisements from '../../../../features/Common/ui/organisms/TopAdvertisements'

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
