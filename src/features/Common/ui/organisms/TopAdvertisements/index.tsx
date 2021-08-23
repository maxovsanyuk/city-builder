import AdvertisementsBox from '../AdvertisementsBox'
import { FC } from 'react'
import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { Typography } from '@material-ui/core'
import { advertisementsConfig } from '../../../../../shared/settings/mock/advertisements'

const TopAdvertisements: FC = () => {
  const { formatMessage } = useIntl()

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {formatMessage({ id: 'top.advertisements' })}
      </Typography>

      <AdvertisementsBox config={advertisementsConfig} />
    </Wrapper>
  )
}

export default TopAdvertisements
