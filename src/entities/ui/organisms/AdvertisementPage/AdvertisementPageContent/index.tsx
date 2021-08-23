import Advertisement from '../Advertisement'
import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { Typography } from '@material-ui/core'
import { GoBackBtn } from 'features/Common/ui/molecules/Buttons/GoBackBtn'
import { advertisementsConfig } from 'shared/settings/mock/advertisements'
import { AdvertisementsSlider } from 'features/Common/ui/molecules/AdvertisementsSlider'

const AdvertisementPageContent = () => {
  const { formatMessage } = useIntl()

  return (
    <Wrapper>
      <Advertisement />
      <GoBackBtn />

      <Typography variant="h4" className="title">
        {formatMessage({ id: 'another.advertisements' })}
      </Typography>

      <AdvertisementsSlider config={advertisementsConfig} />
    </Wrapper>
  )
}

export default AdvertisementPageContent
