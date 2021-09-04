import { Wrapper } from './styles'
import { Header } from 'shared/ui/organisms'
import { Content } from 'shared/ui/templates'
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
    </Wrapper>
  )
}

export default CountryLocationAdvertisement
