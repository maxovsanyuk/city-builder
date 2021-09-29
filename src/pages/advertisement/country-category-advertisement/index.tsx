import { Wrapper } from './styles'
import { Content } from 'shared/ui/templates'
import { Footer, Header } from 'shared/ui/organisms'
import { TopAdvertisements } from 'shared/ui/organisms'
import { SearchForm, Container } from 'shared/ui/molecules'
import { CountryCategoryAdvertisementContent } from 'entities/ui/organisms'

interface CountryCategoryAdvertisementPageProps {}

const CountryCategoryAdvertisementPage: any = (): CountryCategoryAdvertisementPageProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <CountryCategoryAdvertisementContent />
          <TopAdvertisements />
        </Content>
      </Container>
      <Footer />
    </Wrapper>
  )
}

export default CountryCategoryAdvertisementPage
