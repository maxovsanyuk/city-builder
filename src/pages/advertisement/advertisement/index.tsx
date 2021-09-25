import { Wrapper } from './styles'
import { Header } from 'shared/ui/organisms'
import { Content } from 'shared/ui/templates'
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
    </Wrapper>
  )
}

export default AdvertisementPage
