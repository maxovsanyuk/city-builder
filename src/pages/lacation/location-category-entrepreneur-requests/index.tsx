import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from '../../templates/default-layout'
import { LocationCategoryEntrepreneurRequestsContent } from 'entities/ui/organisms'

const LocationCategoryPageEntrepreneurRequests = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <LocationCategoryEntrepreneurRequestsContent />
    </DefaultLayout>
  )
}

export default LocationCategoryPageEntrepreneurRequests
