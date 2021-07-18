import { useParams } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { Wrapper } from './styles'
import { Typography } from '@material-ui/core'
import AdvertisementsBox from 'components/Common/AdvertisementsBox'
import CotegoriesBox from '../../../../HomePage/Components/CategoriesBox'

const advertisementsConfig = [
  { name: '1', link: '/advertisement/1' },
  { name: '2', link: '/advertisement/2' },
  { name: '3', link: '/advertisement/3' },
  { name: '4', link: '/advertisement/4' },
  { name: '5', link: '/advertisement/5' },
]

const LocationCategoriesPageContent = () => {
  const { formatMessage } = useIntl()
  const { locationId }: Record<string, any> = useParams()

  const categoriesConfig = [
    { name: '1', link: `/location/${locationId}/category/1` },
    { name: '2', link: `/location/${locationId}/category/2` },
    { name: '3', link: `/location/${locationId}/category/3` },
    { name: '4', link: `/location/${locationId}/category/4` },
    { name: '5', link: `/location/${locationId}/category/5` },
    { name: '6', link: `/location/${locationId}/category/6` },
  ]

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {locationId} {formatMessage({ id: `categories` })}
      </Typography>

      <CotegoriesBox config={categoriesConfig} />

      <Typography variant="h4" className="title">
        {formatMessage({ id: 'another.advertisements' })}
      </Typography>

      <AdvertisementsBox config={advertisementsConfig} />
    </Wrapper>
  )
}

export default LocationCategoriesPageContent
