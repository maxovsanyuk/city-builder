import { SearchForm } from 'shared/ui/molecules'
import { TopAdvertisements } from 'shared/ui/organisms'
import { DefaultLayout } from '../../templates/default-layout'
import { CountryLocationAdvertisementContent } from 'entities/ui/organisms'

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
