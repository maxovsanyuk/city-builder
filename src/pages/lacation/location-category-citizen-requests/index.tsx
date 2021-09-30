import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from '../../templates/default-layout'
import { LocationCategoryCitizenRequestsContent } from 'entities/ui/organisms'

const LocationCategoryPageCitizenRequests = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <LocationCategoryCitizenRequestsContent />
    </DefaultLayout>
  )
}

export default LocationCategoryPageCitizenRequests
