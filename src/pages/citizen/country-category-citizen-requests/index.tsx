import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from 'shared/ui/templates'
import { CountryCategoryCitizenRequestsContent } from 'features/pages'

const CountryCategoryPageCitizenRequests = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <CountryCategoryCitizenRequestsContent />
    </DefaultLayout>
  )
}

export default CountryCategoryPageCitizenRequests
