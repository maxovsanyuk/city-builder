import { useParams, useLocation } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { Wrapper, Advertisement } from './styles'
import { Typography } from '@material-ui/core'

const AdvertisementPageContent = () => {
  const { formatMessage } = useIntl()
  const { advertisementId }: Record<string, any> = useParams()

  const query = new URLSearchParams(useLocation().search)

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {query.get('location')} {formatMessage({ id: 'advertisement' })} {advertisementId}
      </Typography>

      <Advertisement />
    </Wrapper>
  )
}

export default AdvertisementPageContent
