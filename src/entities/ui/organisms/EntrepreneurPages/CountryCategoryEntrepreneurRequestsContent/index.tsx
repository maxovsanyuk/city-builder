import AdvertisementsBox from 'features/Common/ui/organisms/AdvertisementsBox'
import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { GoBackBtn } from '../../../../../features/Common/ui/molecules/Buttons/GoBackBtn'
import { advertisementsConfig } from '../../../../../shared/settings/mock/advertisements'

const CountryCategoryEntrepreneurRequestsContent = () => {
  const { formatMessage } = useIntl()
  const { categoryId }: Record<string, any> = useParams()

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {formatMessage({ id: 'country' })} {formatMessage({ id: `category.${categoryId}` })}{' '}
        {formatMessage({ id: 'entrepreneur.requests' })}
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

export default CountryCategoryEntrepreneurRequestsContent
