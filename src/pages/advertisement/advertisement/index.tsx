import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from 'shared/ui/templates'
import { AdvertisementPageContent } from 'features/pages'

const AdvertisementPage = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <AdvertisementPageContent />
    </DefaultLayout>
  )
}

export default AdvertisementPage
