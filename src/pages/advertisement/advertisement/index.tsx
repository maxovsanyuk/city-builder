import { Wrapper } from './styles'
import { Content } from 'shared/ui/templates'
import { Footer, Header } from 'shared/ui/organisms'
import { Container, SearchForm } from 'shared/ui/molecules'
import { AdvertisementPageContent } from 'entities/ui/organisms'

interface AdvertisementPageProps {}

const AdvertisementPage: any = (): AdvertisementPageProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <AdvertisementPageContent />
        </Content>
      </Container>
      <Footer />
    </Wrapper>
  )
}

export default AdvertisementPage
