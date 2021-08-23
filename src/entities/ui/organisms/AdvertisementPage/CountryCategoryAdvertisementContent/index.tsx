import AdvertisementsBox from 'features/Common/ui/organisms/AdvertisementsBox'
import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { GoBackBtn } from '../../../../../features/Common/ui/molecules/Buttons/GoBackBtn'
import { advertisementsConfig } from '../../../../../shared/settings/mock/advertisements'

const CountryCategoryAdvertisementContent = () => {
  const { formatMessage } = useIntl()
  const { categoryId, advertisementId }: Record<string, any> = useParams()

  return (
    <Wrapper>
      <GoBackBtn />

      <Typography variant="h4" className="title">
        {formatMessage({ id: 'search.result.for' })} {formatMessage({ id: categoryId })} (
        {formatMessage({ id: advertisementId })})
      </Typography>

      <AdvertisementsBox config={advertisementsConfig} />
    </Wrapper>
  )
}

export default CountryCategoryAdvertisementContent
