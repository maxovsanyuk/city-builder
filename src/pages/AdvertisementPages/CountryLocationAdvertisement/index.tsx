import { Wrapper } from './styles'
import Content from 'features/Common/ui/templates/Content'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import { Container } from 'features/Common/ui/molecules/Grid'
import Header from '../../../features/Common/ui/organisms/Header'
import TopAdvertisements from '../../../features/Common/ui/organisms/TopAdvertisements'
import CountryLocationAdvertisementContent from '../../../entities/ui/organisms/AdvertisementPage/CountryLocationAdvertisementContent'

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
