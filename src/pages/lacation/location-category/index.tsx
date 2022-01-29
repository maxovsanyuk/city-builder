import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from 'shared/ui/templates'
import { LocationCategoryContent } from 'features/pages'

const LocationCategoryPage = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <LocationCategoryContent />
    </DefaultLayout>
  )
}

export default LocationCategoryPage
