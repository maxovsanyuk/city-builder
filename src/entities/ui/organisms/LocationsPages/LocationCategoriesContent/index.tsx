import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { CotegoriesBox } from 'shared/ui/organisms'
import { GoBackBtn, AdvertisementsBox } from 'shared/ui/molecules'
import { locationCategoriesConfig } from 'shared/settings/mock/categories'
import { advertisementsConfig } from 'shared/settings/mock/advertisements'

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
