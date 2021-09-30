import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from '../../templates/default-layout'
import { LocationCategoriesContent } from 'entities/ui/organisms'

const LocationCategoriesPage = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <LocationCategoriesContent />
    </DefaultLayout>
  )
}

export default LocationCategoriesPage
