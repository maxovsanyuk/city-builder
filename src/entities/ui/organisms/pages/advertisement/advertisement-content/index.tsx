import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { Typography } from '@material-ui/core'
import { GoBackBtn } from 'shared/ui/molecules'
import { AdvertisementsSlider } from 'features/ui/molecules'
import { AdvertisementCard } from 'entities/ui/organisms/index'
import { advertisementsConfig } from 'shared/mock/advertisements'

export const AdvertisementPageContent = () => {
  const { formatMessage } = useIntl()

  return (
    <Wrapper>
      <GoBackBtn />
      <AdvertisementCard />

      <Typography variant="h4" className="title">
        {formatMessage({ id: 'another.advertisements' })}
      </Typography>
      <AdvertisementsSlider config={advertisementsConfig} />
    </Wrapper>
  )
}
