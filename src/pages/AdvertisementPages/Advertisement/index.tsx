import Content from 'features/Common/ui/templates/Content'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import Header from '../../../features/Common/ui/organisms/Header'
import AdvertisementPageContent from '../../../entities/ui/organisms/AdvertisementPage/AdvertisementPageContent'
import { Wrapper } from './styles'
import { Container } from 'features/Common/ui/molecules/Grid'

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
