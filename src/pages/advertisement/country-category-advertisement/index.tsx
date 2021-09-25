import { Wrapper } from './styles'
import { Header } from 'shared/ui/organisms'
import { Content } from 'shared/ui/templates'
import { TopAdvertisements } from 'shared/ui/organisms'
import { SearchForm, Container } from 'shared/ui/molecules'
import { CountryCategoryAdvertisementContent } from 'entities/ui/organisms'

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
