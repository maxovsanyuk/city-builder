import Content from 'features/Common/ui/templates/Content'
import SearchForm from 'features/Common/ui/organisms/SearchForm'
import Header from '../../../features/Common/ui/organisms/Header'
import { Wrapper } from './styles'
import CountryCategoryPageEntrepreneurRequestsContent from '../../../entities/ui/organisms/EntrepreneurPages/CountryCategoryEntrepreneurRequestsContent'
import { Container } from 'features/Common/ui/molecules/Grid'

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
