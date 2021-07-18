import SearchForm from 'components/Common/SearchForm'
import MostPopularInCountry from '../../../HomePage/Components/MostPopularInCountry'
import MostPopularInCategory from '../../../HomePage/Components/MostPopularInCitizenRequests'
import Advertisements from '../../../HomePage/Components/Advertisements'
import Content from '../../../../containers/Content'
import { Container } from 'components/Common/Grid'

const EntrepreneurHomePage = () => {
  return (
    <Container>
      <Content>
        <SearchForm />
        <MostPopularInCountry />
        <MostPopularInCategory />
        <Advertisements />
      </Content>
    </Container>
  )
}

export default EntrepreneurHomePage
