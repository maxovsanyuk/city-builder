import { Wrapper } from './styles'
import Content from 'features/Common/ui/templates/Content'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import { Container } from 'features/Common/ui/molecules/Grid'
import CountryCategoryPageEntrepreneurRequestsContent from '../../../entities/ui/organisms/EntrepreneurPages/CountryCategoryEntrepreneurRequestsContent'
import Header from '../../../features/Common/ui/organisms/Header'

interface CountryCategoryPageEntrepreneurRequestsProps {}

const CountryCategoryPageEntrepreneurRequests: any = (): CountryCategoryPageEntrepreneurRequestsProps => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          <SearchForm />
          <CountryCategoryPageEntrepreneurRequestsContent />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default CountryCategoryPageEntrepreneurRequests
