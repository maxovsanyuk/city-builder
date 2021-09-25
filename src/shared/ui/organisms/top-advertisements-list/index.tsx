import { FC } from 'react'
import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { Typography } from '@material-ui/core'
import { AdvertisementsBox } from 'shared/ui/molecules'
import { advertisementsConfig } from 'settings/mock/advertisements'

export const TopAdvertisements: FC = () => {
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
