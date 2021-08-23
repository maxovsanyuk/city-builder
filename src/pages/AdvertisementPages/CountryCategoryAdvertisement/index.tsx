import Content from 'features/Common/ui/templates/Content'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import Header from '../../../features/Common/ui/organisms/Header'
import TopAdvertisements from '../../../features/Common/ui/organisms/TopAdvertisements'
import { Wrapper } from './styles'
import CountryCategoryAdvertisementContent from '../../../entities/ui/organisms/AdvertisementPage/CountryCategoryAdvertisementContent'
import { Container } from 'features/Common/ui/molecules/Grid'

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
    </Wrapper>
  )
}

export default CountryCategoryAdvertisementPage
