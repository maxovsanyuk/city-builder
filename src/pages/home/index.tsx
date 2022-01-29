import { useStore } from 'effector-react'
import { JoyRide } from 'processes/joyride'
import { SearchForm } from 'shared/ui/molecules'
import { $user } from 'processes/auth/login-model'
import { DefaultLayout } from 'shared/ui/templates'
import { TopAdvertisements } from 'shared/ui/organisms'
import { MostPopularInCitizenRequests, MostPopularInCountry, MostPopularInEntrepreneurRequests } from 'features/pages'

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
