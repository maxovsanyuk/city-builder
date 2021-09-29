import { Wrapper } from './styles'
import { Content } from 'shared/ui/templates'
import { Footer, Header } from 'shared/ui/organisms'
import { Container, SearchForm } from 'shared/ui/molecules'
import { CountryCategoryCitizenRequestsContent } from 'entities/ui/organisms'

interface CountryCategoryPageCitizenRequestsProps {}

const CountryCategoryPageCitizenRequests: any = (): CountryCategoryPageCitizenRequestsProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <CountryCategoryCitizenRequestsContent />
        </Content>
      </Container>
      <Footer />
    </Wrapper>
  )
}

export default CountryCategoryPageCitizenRequests
