import { useParams } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { Wrapper } from './styles'
import { Typography } from '@material-ui/core'
import AdvertisementsBox from 'components/Common/AdvertisementsBox'

const advertisementsConfig = [
  { name: '1', link: '/advertisement/1' },
  { name: '2', link: '/advertisement/2' },
  { name: '3', link: '/advertisement/3' },
  { name: '4', link: '/advertisement/4' },
  { name: '5', link: '/advertisement/5' },
]

const CategoryPageTopCitizenRequestsContent = () => {
  const { formatMessage } = useIntl()
  const { categoryId }: Record<string, any> = useParams()

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {formatMessage({ id: 'top' })} {formatMessage({ id: 'category' })} {categoryId}{' '}
        {formatMessage({ id: 'citizen.requests' })}
      </Typography>

      <AdvertisementsBox config={advertisementsConfig} />

      <Typography variant="h4" className="title">
        {formatMessage({ id: 'another.advertisements' })}
      </Typography>

      <AdvertisementsBox config={advertisementsConfig} />
    </Wrapper>
  )
}

export default CategoryPageTopCitizenRequestsContent
