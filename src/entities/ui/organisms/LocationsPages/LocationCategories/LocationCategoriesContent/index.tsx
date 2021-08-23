import { useParams } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { Wrapper } from './styles'
import { Typography } from '@material-ui/core'
import AdvertisementsBox from 'features/Common/ui/organisms/AdvertisementsBox'
import CotegoriesBox from '../../../../../../features/Common/ui/organisms/CategoriesBox'
import { locationCategoriesConfig } from '../../../../../../shared/settings/mock/categories'
import { GoBackBtn } from '../../../../../../features/Common/ui/molecules/Buttons/GoBackBtn'
import { advertisementsConfig } from '../../../../../../shared/settings/mock/advertisements'

const LocationCategoriesContent = () => {
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

export default LocationCategoriesContent
