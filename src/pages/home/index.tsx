import Joyride from 'react-joyride'
import { Wrapper } from './styles'
import { useStore } from 'effector-react'
import { Content } from 'shared/ui/templates'
import { $user } from '../../processes/auth/login-model'
import { SearchForm, Container } from 'shared/ui/molecules'
import { JoyrideStepsConfig } from '../../settings/configs'
import { Footer, Header, TopAdvertisements } from 'shared/ui/organisms'
import {
  MostPopularInCitizenRequests,
  MostPopularInCountry,
  MostPopularInEntrepreneurRequests,
} from 'entities/ui/organisms'

interface HomePageProps {}

const HomePage: any = (): HomePageProps => {
  const user = useStore($user)

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
      <Footer />

      {user?.token && <Joyride continuous showSkipButton run={true} callback={() => null} steps={JoyrideStepsConfig} />}
    </Wrapper>
  )
}

export default HomePage
