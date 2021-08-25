import Content from 'features/Common/ui/templates/Content'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import Header from '../../../features/Common/ui/organisms/Header'
import TopAdvertisements from '../../../features/Common/ui/organisms/TopAdvertisements'
import { Wrapper } from './styles'
import CountryLocationAdvertisementContent from '../../../entities/ui/organisms/AdvertisementPage/CountryLocationAdvertisementContent'
import { Container } from 'features/Common/ui/molecules/Grid'

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
