import { Wrapper } from './styles'
import { Content } from 'shared/ui/templates'
import { SearchForm, Container } from 'shared/ui/molecules'
import { Header, TopAdvertisements } from 'shared/ui/organisms'
import {
  MostPopularInCitizenRequests,
  MostPopularInCountry,
  MostPopularInEntrepreneurRequests,
} from 'entities/ui/organisms'

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
