import { useStore } from 'effector-react'
import { SearchForm } from 'shared/ui/molecules'
import { JoyRide } from '../../processes/joyride'
import { TopAdvertisements } from 'shared/ui/organisms'
import { $user } from '../../processes/auth/login-model'
import { DefaultLayout } from '../templates/default-layout'
import {
  MostPopularInCitizenRequests,
  MostPopularInCountry,
  MostPopularInEntrepreneurRequests,
} from 'entities/ui/organisms'

const HomePage = () => {
  const user = useStore($user)

  return (
    <DefaultLayout>
      <SearchForm />
      <MostPopularInCountry />
      <MostPopularInCitizenRequests />
      <MostPopularInEntrepreneurRequests />
      <TopAdvertisements />
      {user?.token && <JoyRide />}
    </DefaultLayout>
  )
}

export default HomePage
