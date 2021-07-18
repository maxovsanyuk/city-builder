import { Wrapper } from './styles'
import { Header } from 'components/Common'
import Content from 'containers/Content'
import SearchForm from 'components/Common/SearchForm'
import { Container } from 'components/Common/Grid'
import CategoryPageTopEntrepreneurRequestsContent from './Components/CategoryPageTopEntrepreneurRequestsContent'

interface CategoryPageTopEntrepreneurRequestseProps {}

const CategoryPageTopEntrepreneurRequests: any = (): CategoryPageTopEntrepreneurRequestseProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <CategoryPageTopEntrepreneurRequestsContent />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default CategoryPageTopEntrepreneurRequests
