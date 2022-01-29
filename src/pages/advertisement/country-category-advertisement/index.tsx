import { FC } from 'react'
import { SearchForm } from 'shared/ui/molecules'
import { DefaultLayout } from 'shared/ui/templates'
import { TopAdvertisements } from 'shared/ui/organisms'
import { CountryCategoryAdvertisementContent } from 'features/pages'

const CountryCategoryAdvertisementPage: FC = () => {
  return (
    <DefaultLayout>
      <SearchForm />
      <CountryCategoryAdvertisementContent />
      <TopAdvertisements />
    </DefaultLayout>
  )
}

export default CountryCategoryAdvertisementPage
