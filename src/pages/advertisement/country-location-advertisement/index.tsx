import { Wrapper } from './styles'
import { Content } from 'shared/ui/templates'
import { Footer, Header } from 'shared/ui/organisms'
import { TopAdvertisements } from 'shared/ui/organisms'
import { Container, SearchForm } from 'shared/ui/molecules'
import { CountryLocationAdvertisementContent } from 'entities/ui/organisms'

interface CountryLocationAdvertisementProps {}

const CountryLocationAdvertisement: any = (): CountryLocationAdvertisementProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <CountryLocationAdvertisementContent />
          <TopAdvertisements />
        </Content>
      </Container>
      <Footer />
    </Wrapper>
  )
}

export default CountryLocationAdvertisement
