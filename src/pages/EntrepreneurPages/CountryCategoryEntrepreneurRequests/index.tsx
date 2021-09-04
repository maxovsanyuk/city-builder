import { Wrapper } from './styles'
import { Header } from 'shared/ui/organisms'
import { Content } from 'shared/ui/templates'
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
    </Wrapper>
  )
}

export default CountryCategoryPageEntrepreneurRequests
