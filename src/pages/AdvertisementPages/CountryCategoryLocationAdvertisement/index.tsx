import { Wrapper } from './styles'
import Content from 'features/Common/ui/templates/Content'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import { Container } from 'features/Common/ui/molecules/Grid'
import Header from '../../../features/Common/ui/organisms/Header'
import TopAdvertisements from '../../../features/Common/ui/organisms/TopAdvertisements'
import CountryCategoryLocationAdvertisementContent from '../../../entities/ui/organisms/AdvertisementPage/CountryCategoryLocationAdvertisementContent'

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
    </Wrapper>
  )
}

export default CountryCategoryLocationAdvertisement
