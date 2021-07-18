import { Wrapper } from './styles'
import { Header } from 'components/Common'
import Content from 'containers/Content'
import SearchForm from 'components/Common/SearchForm'
import { Container } from 'components/Common/Grid'
import CategoryPageTopCitizenRequestsContent from './Components/CategoryPageTopCitizenRequestsContent'

interface CategoryPageTopCitizenRequestseProps {}

const CategoryPageTopCitizenRequests: any = (): CategoryPageTopCitizenRequestseProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <CategoryPageTopCitizenRequestsContent />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default CategoryPageTopCitizenRequests
