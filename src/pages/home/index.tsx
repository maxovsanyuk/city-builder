import Joyride from 'react-joyride'
import { useStore } from 'effector-react'
import { SearchForm } from 'shared/ui/molecules'
import { TopAdvertisements } from 'shared/ui/organisms'
import { $user } from '../../processes/auth/login-model'
import { JoyrideStepsConfig } from '../../settings/configs'
import { DefaultLayout } from '../templates/default-layout'
import { defaultColors } from '../../settings/theme/styles/variables'
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
      {user?.token && (
        <Joyride
          styles={{
            options: {
              primaryColor: defaultColors.blueMedium,
            },
          }}
          continuous
          showSkipButton
          run={true}
          callback={() => null}
          steps={JoyrideStepsConfig}
        />
      )}
    </DefaultLayout>
  )
}

export default HomePage
