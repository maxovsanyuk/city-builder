import { useParams } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { Wrapper } from './styles'
import { Typography } from '@material-ui/core'
import AdvertisementsBox from 'components/Common/AdvertisementsBox'
import CotegoriesBox from '../../../../HomePage/Components/CategoriesBox'

const LocationCategoryPageContent = () => {
  const { formatMessage } = useIntl()
  const { locationId, categoryId }: Record<string, any> = useParams()

  const advertisementsConfig = [
    { name: '1', link: `/advertisement/1/location/${locationId}` },
    { name: '2', link: `/advertisement/2/location/${locationId}` },
    { name: '3', link: `/advertisement/3/location/${locationId}` },
    { name: '4', link: `/advertisement/4/location/${locationId}` },
    { name: '5', link: `/advertisement/5/location/${locationId}` },
  ]

  const categoriesConfig = [
    { name: 'Citizen requests', link: `/location/${locationId}/category/${categoryId}/citizen-requests/` },
    { name: 'Entrepreneur requests', link: `/location/${locationId}/category/${categoryId}/entrepreneur-requests/` },
  ]

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {locationId} {formatMessage({ id: `category.${categoryId}` })}
      </Typography>

      <CotegoriesBox config={categoriesConfig} className="cotegories-box" />

      <Typography variant="h4" className="title">
        {formatMessage({ id: 'another.advertisements' })}
      </Typography>

      <AdvertisementsBox config={advertisementsConfig} />
    </Wrapper>
  )
}

export default LocationCategoryPageContent
