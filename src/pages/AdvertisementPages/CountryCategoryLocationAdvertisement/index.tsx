import { Wrapper } from './styles'
import { Header } from 'shared/ui/organisms'
import { Content } from 'shared/ui/templates'
import { TopAdvertisements } from 'shared/ui/organisms'
import { Container, SearchForm } from 'shared/ui/molecules'
import { CountryCategoryLocationAdvertisementContent } from 'entities/ui/organisms'

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
