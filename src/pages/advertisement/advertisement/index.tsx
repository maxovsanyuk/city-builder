import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from '../../templates/default-layout'
import { AdvertisementPageContent } from 'entities/ui/organisms'

const AdvertisementPage = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <AdvertisementPageContent />
    </DefaultLayout>
  )
}

export default AdvertisementPage
