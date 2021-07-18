import { Wrapper } from './styles'
import { Header } from 'components/Common'
import Content from 'containers/Content'
import SearchForm from 'components/Common/SearchForm'
import { Container } from 'components/Common/Grid'
import AdvertisementPageContent from './Components/AdvertisementPageContent'

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
