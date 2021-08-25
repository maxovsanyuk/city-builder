import { useParams } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { Wrapper } from './styles'
import { Typography } from '@material-ui/core'
import AdvertisementsBox from 'features/Common/ui/organisms/AdvertisementsBox'
import { GoBackBtn } from '../../../../../features/Common/ui/molecules/Buttons/GoBackBtn'
import { advertisementsConfig } from '../../../../../shared/settings/mock/advertisements'

const CountryCategoryCitizenRequestsContent = () => {
  const { formatMessage } = useIntl()
  const { categoryId }: Record<string, any> = useParams()

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {formatMessage({ id: 'country' })} {formatMessage({ id: `category.${categoryId}` })}{' '}
        {formatMessage({ id: 'citizen.requests' })}
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

export default CountryCategoryCitizenRequestsContent