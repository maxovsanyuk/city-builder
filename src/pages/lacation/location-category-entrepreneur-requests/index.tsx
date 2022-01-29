import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from 'shared/ui/templates'
import { LocationCategoryEntrepreneurRequestsContent } from 'features/pages'

const LocationCategoryPageEntrepreneurRequests = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <LocationCategoryEntrepreneurRequestsContent />
    </DefaultLayout>
  )
}

export default LocationCategoryPageEntrepreneurRequests
