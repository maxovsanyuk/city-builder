import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from 'shared/ui/templates'
import { TopAdvertisements } from 'shared/ui/organisms'
import { CountryLocationAdvertisementContent } from 'features/pages'

const CountryLocationAdvertisement = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <CountryLocationAdvertisementContent />
      <TopAdvertisements />
    </DefaultLayout>
  )
}

export default CountryLocationAdvertisement
