import Content from 'features/Common/ui/templates/Content'
import Header from '../../features/Common/ui/organisms/Header'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import TopAdvertisements from '../../features/Common/ui/organisms/TopAdvertisements'
import MostPopularInCountry from '../../entities/ui/organisms/HomePage/MostPopularInCountry'
import MostPopularInCitizenRequests from '../../entities/ui/organisms/HomePage/MostPopularInCitizenRequests'
import MostPopularInEntrepreneurRequests from '../../entities/ui/organisms/HomePage/MostPopularInEntrepreneurRequests'
import { Wrapper } from './styles'
import { Container } from 'features/Common/ui/molecules/Grid'

interface HomePageProps {}

const HomePage: any = (): HomePageProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <MostPopularInCountry />
          <MostPopularInCitizenRequests />
          <MostPopularInEntrepreneurRequests />
          <TopAdvertisements />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default HomePage
