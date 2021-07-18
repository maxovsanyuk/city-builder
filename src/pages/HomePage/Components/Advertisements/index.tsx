import { useIntl } from 'react-intl'
import { Wrapper } from './styles'
import { Typography } from '@material-ui/core'
import AdvertisementsBox from '../../../../components/Common/AdvertisementsBox'

const advertisementsConfig = [
  { name: '1', link: '/advertisement/1' },
  { name: '2', link: '/advertisement/2' },
  { name: '3', link: '/advertisement/3' },
  { name: '4', link: '/advertisement/4' },
  { name: '5', link: '/advertisement/5' },
  { name: '6', link: '/advertisement/6' },
  { name: '7', link: '/advertisement/7' },
  { name: '8', link: '/advertisement/8' },
  { name: '9', link: '/advertisement/9' },
  { name: '10', link: '/advertisement/10' },
]

const Advertisements = () => {
  const { formatMessage } = useIntl()

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {formatMessage({ id: 'advertisements' })}
      </Typography>

      <AdvertisementsBox config={advertisementsConfig} />
    </Wrapper>
  )
}

export default Advertisements
