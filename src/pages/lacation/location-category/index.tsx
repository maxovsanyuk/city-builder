import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from '../../templates/default-layout'
import { LocationCategoryContent } from 'entities/ui/organisms'

const LocationCategoryPage = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <LocationCategoryContent />
    </DefaultLayout>
  )
}

export default LocationCategoryPage
