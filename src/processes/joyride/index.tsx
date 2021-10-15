import Joyride, { CallBackProps, STATUS } from 'react-joyride'
import { JoyrideStepsConfig } from '../../settings/configs'
import { defaultColors } from '../../settings/theme/styles/variables'

const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED]

const handleJoyrideCallback = (data: CallBackProps) => {
  const { status } = data

  if (finishedStatuses.includes(status)) {
    localStorage.setItem('is-joy-ride-finished', 'true')
  }
}

export const JoyRide = () => {
  const isJoyRideFinished = JSON.parse(localStorage.getItem('is-joy-ride-finished') || 'false')

  return (
    <Joyride
      styles={{
        options: {
          primaryColor: defaultColors.blueMedium,
        },
      }}
      continuous
      showSkipButton
      run={!isJoyRideFinished}
      callback={handleJoyrideCallback}
      steps={JoyrideStepsConfig}
    />
  )
}
