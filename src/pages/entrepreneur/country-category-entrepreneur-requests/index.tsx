import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from 'shared/ui/templates'
import { CountryCategoryEntrepreneurRequestsContent } from 'features/pages'

const CountryCategoryPageEntrepreneurRequests = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <CountryCategoryEntrepreneurRequestsContent />
    </DefaultLayout>
  )
}

export default CountryCategoryPageEntrepreneurRequests
