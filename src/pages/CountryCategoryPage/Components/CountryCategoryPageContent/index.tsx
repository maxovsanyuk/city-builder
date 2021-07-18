import { useParams } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { Wrapper } from './styles'
import { Typography } from '@material-ui/core'
import AdvertisementsBox from 'components/Common/AdvertisementsBox'
import CotegoriesBox from '../../../HomePage/Components/CategoriesBox'

const advertisementsConfig = [
  { name: '1', link: '/advertisement/1' },
  { name: '2', link: '/advertisement/2' },
  { name: '3', link: '/advertisement/3' },
  { name: '4', link: '/advertisement/4' },
  { name: '5', link: '/advertisement/5' },
]

const CountryCategoryPageContent = () => {
  const { formatMessage } = useIntl()
  const { categoryId }: Record<string, any> = useParams()

  const categoriesConfig = [
    { name: 'Citizen requests', link: `/country/category/${categoryId}/citizen-requests` },
    { name: 'Entrepreneur requests', link: `/country/category/${categoryId}/entrepreneur-requests` },
  ]

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {formatMessage({ id: 'country.category' })} {categoryId}
      </Typography>

      <CotegoriesBox config={categoriesConfig} className="cotegories-box" />

      <Typography variant="h4" className="title">
        {formatMessage({ id: 'advertisements' })}
      </Typography>

      <AdvertisementsBox config={advertisementsConfig} />
    </Wrapper>
  )
}

export default CountryCategoryPageContent
