import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from '../../templates/default-layout'
import { CountryCategoryCitizenRequestsContent } from 'entities/ui/organisms'

const CountryCategoryPageCitizenRequests = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <CountryCategoryCitizenRequestsContent />
    </DefaultLayout>
  )
}

export default CountryCategoryPageCitizenRequests
