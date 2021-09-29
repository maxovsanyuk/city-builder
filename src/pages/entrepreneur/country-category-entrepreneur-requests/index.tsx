import { Wrapper } from './styles'
import { Content } from 'shared/ui/templates'
import { Footer, Header } from 'shared/ui/organisms'
import { Container, SearchForm } from 'shared/ui/molecules'
import { CountryCategoryEntrepreneurRequestsContent } from 'entities/ui/organisms'

interface CountryCategoryPageEntrepreneurRequestsProps {}

const CountryCategoryPageEntrepreneurRequests: any = (): CountryCategoryPageEntrepreneurRequestsProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <CountryCategoryEntrepreneurRequestsContent />
        </Content>
      </Container>
      <Footer />
    </Wrapper>
  )
}

export default CountryCategoryPageEntrepreneurRequests
