import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { locationCategoriesConfig } from 'settings/mock/categories'
import { advertisementsConfig } from 'settings/mock/advertisements'
import { GoBackBtn, AdvertisementsBox, CotegoriesBox } from 'shared/ui/molecules'

export const LocationCategoriesContent = () => {
  const { formatMessage } = useIntl()
  const { locationId }: Record<string, any> = useParams()

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {locationId} {formatMessage({ id: `categories` })}
      </Typography>
      <GoBackBtn />
      <CotegoriesBox config={locationCategoriesConfig(locationId)} />

      <Typography variant="h4" className="title">
        {formatMessage({ id: 'another.advertisements' })}
      </Typography>

      <AdvertisementsBox config={advertisementsConfig} />
    </Wrapper>
  )
}
