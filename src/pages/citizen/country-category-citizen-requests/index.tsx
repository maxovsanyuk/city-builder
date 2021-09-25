import { Wrapper } from './styles'
import { Header } from 'shared/ui/organisms'
import { Content } from 'shared/ui/templates'
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
    </Wrapper>
  )
}

export default CountryCategoryPageCitizenRequests
