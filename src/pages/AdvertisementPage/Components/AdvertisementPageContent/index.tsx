import { useIntl } from 'react-intl'
import { Wrapper } from './styles'
import { Typography } from '@material-ui/core'
import AdvertisementsBox from 'components/Common/AdvertisementsBox'
import Advertisement from '../Advertisement'

const advertisementsConfig = [
  { name: '1', link: '/advertisement/1' },
  { name: '2', link: '/advertisement/2' },
  { name: '3', link: '/advertisement/3' },
  { name: '4', link: '/advertisement/4' },
  { name: '5', link: '/advertisement/5' },
]

const AdvertisementPageContent = () => {
  const { formatMessage } = useIntl()

  return (
    <Wrapper>
      <Advertisement />

      <Typography variant="h4" className="title">
        {formatMessage({ id: 'another.advertisements' })}
      </Typography>

      <AdvertisementsBox config={advertisementsConfig} />
    </Wrapper>
  )
}

export default AdvertisementPageContent



