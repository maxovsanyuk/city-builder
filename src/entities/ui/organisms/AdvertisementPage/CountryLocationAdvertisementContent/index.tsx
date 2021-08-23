import { useParams } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { Wrapper } from './styles'
import { Typography } from '@material-ui/core'
import AdvertisementsBox from 'features/Common/ui/organisms/AdvertisementsBox'
import { GoBackBtn } from '../../../../../features/Common/ui/molecules/Buttons/GoBackBtn'
import { advertisementsConfig } from '../../../../../shared/settings/mock/advertisements'

const CountryLocationAdvertisementContent = () => {
  const { formatMessage } = useIntl()
  const { locationId, advertisementId }: Record<string, any> = useParams()

  return (
    <Wrapper>
      <GoBackBtn />
      <Typography variant="h4" className="title">
        {formatMessage({ id: 'search.result.for' })} {formatMessage({ id: locationId })}(
        {formatMessage({ id: advertisementId })})
      </Typography>
      <AdvertisementsBox config={advertisementsConfig} />
    </Wrapper>
  )
}

export default CountryLocationAdvertisementContent
