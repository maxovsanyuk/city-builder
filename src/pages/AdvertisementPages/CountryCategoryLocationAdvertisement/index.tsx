import Content from 'features/Common/ui/templates/Content'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import Header from '../../../features/Common/ui/organisms/Header'
import TopAdvertisements from '../../../features/Common/ui/organisms/TopAdvertisements'
import { Wrapper } from './styles'
import CountryCategoryLocationAdvertisementContent from '../../../entities/ui/organisms/AdvertisementPage/CountryCategoryLocationAdvertisementContent'
import { Container } from 'features/Common/ui/molecules/Grid'

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
