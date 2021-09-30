import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from '../templates/default-layout'
import { CountryCategoryContent } from 'entities/ui/organisms'

const CountryCategoryPage = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <CountryCategoryContent />
    </DefaultLayout>
  )
}

export default CountryCategoryPage
