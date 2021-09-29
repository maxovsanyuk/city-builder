import { Wrapper } from './styles'
import { Content } from 'shared/ui/templates'
import { Footer, Header } from 'shared/ui/organisms'
import { TopAdvertisements } from 'shared/ui/organisms'
import { Container, SearchForm } from 'shared/ui/molecules'
import { CountryCategoryLocationAdvertisementContent } from 'entities/ui/organisms'

interface CountryCategoryLocationAdvertisementProps {}

const CountryCategoryLocationAdvertisement: any = (): CountryCategoryLocationAdvertisementProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <CountryCategoryLocationAdvertisementContent />
          <TopAdvertisements />
        </Content>
      </Container>
      <Footer />
    </Wrapper>
  )
}

export default CountryCategoryLocationAdvertisement
