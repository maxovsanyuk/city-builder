import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from 'shared/ui/templates'
import { TopAdvertisements } from 'shared/ui/organisms'
import { CountryCategoryLocationAdvertisementContent } from 'features/pages'

const CountryCategoryLocationAdvertisement = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <CountryCategoryLocationAdvertisementContent />
      <TopAdvertisements />
    </DefaultLayout>
  )
}

export default CountryCategoryLocationAdvertisement
