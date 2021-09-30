import { SearchForm } from 'shared/ui/molecules'
import { TopAdvertisements } from 'shared/ui/organisms'
import { DefaultLayout } from '../../templates/default-layout'
import { CountryCategoryLocationAdvertisementContent } from 'entities/ui/organisms'

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
