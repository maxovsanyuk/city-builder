import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from 'shared/ui/templates'
import { CountryCategoryContent } from 'features/pages'

const CountryCategoryPage = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <CountryCategoryContent />
    </DefaultLayout>
  )
}

export default CountryCategoryPage
