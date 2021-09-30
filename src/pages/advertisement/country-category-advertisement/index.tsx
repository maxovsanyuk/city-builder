import { FC } from 'react'
import { SearchForm } from '../../../shared/ui/molecules'
import { DefaultLayout } from '../../templates/default-layout'
import { TopAdvertisements } from '../../../shared/ui/organisms'
import { CountryCategoryAdvertisementContent } from 'entities/ui/organisms'

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
