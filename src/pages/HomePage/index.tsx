import { Wrapper } from './styles'
import { Header } from 'components/Common'
import Content from 'containers/Content'
import { Container } from 'components/Common/Grid'
import SearchForm from 'components/Common/SearchForm'
import MostPopularInCountry from './Components/MostPopularInCountry'
import MostPopularInCitizenRequests from './Components/MostPopularInCitizenRequests'
import MostPopularInEntrepreneurRequests from './Components/MostPopularInEntrepreneurRequests'
import Advertisements from './Components/Advertisements'

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
          <Advertisements />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default HomePage
