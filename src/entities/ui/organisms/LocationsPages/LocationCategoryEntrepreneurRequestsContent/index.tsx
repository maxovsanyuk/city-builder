import AdvertisementsBox from 'features/Common/ui/organisms/AdvertisementsBox'
import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { GoBackBtn } from '../../../../../features/Common/ui/molecules/Buttons/GoBackBtn'

const LocationCategoryEntrepreneurRequestsContent = () => {
  const { formatMessage } = useIntl()
  const { locationId, categoryId }: Record<string, any> = useParams()

  const advertisementsConfig = [
    { name: '1', link: `/advertisement/1/?location=${locationId}` },
    { name: '2', link: `/advertisement/2/?location=${locationId}` },
    { name: '3', link: `/advertisement/3/?location=${locationId}` },
    { name: '4', link: `/advertisement/4/?location=${locationId}` },
    { name: '5', link: `/advertisement/5/?location=${locationId}` },
  ]

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {locationId} {formatMessage({ id: `category.${categoryId}` })} {formatMessage({ id: 'entrepreneur.requests' })}
      </Typography>

      <GoBackBtn />

      <AdvertisementsBox config={advertisementsConfig} />

      <Typography variant="h4" className="title">
        {formatMessage({ id: 'another.advertisements' })}
      </Typography>

      <AdvertisementsBox config={advertisementsConfig} />
    </Wrapper>
  )
}

export default LocationCategoryEntrepreneurRequestsContent
