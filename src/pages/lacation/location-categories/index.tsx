import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from 'shared/ui/templates'
import { LocationCategoriesContent } from 'features/pages'

const LocationCategoriesPage = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <LocationCategoriesContent />
    </DefaultLayout>
  )
}

export default LocationCategoriesPage
