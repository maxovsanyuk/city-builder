import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from 'shared/ui/templates'
import { LocationCategoryCitizenRequestsContent } from 'features/pages'

const LocationCategoryPageCitizenRequests = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <LocationCategoryCitizenRequestsContent />
    </DefaultLayout>
  )
}

export default LocationCategoryPageCitizenRequests
