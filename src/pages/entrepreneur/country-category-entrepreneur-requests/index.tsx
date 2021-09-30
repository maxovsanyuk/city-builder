import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from '../../templates/default-layout'
import { CountryCategoryEntrepreneurRequestsContent } from 'entities/ui/organisms'

const CountryCategoryPageEntrepreneurRequests = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <CountryCategoryEntrepreneurRequestsContent />
    </DefaultLayout>
  )
}

export default CountryCategoryPageEntrepreneurRequests
