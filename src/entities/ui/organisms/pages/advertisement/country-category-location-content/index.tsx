import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { GoBackBtn, AdvertisementsBox } from 'shared/ui/molecules'
import { advertisementsConfig } from 'settings/mock/advertisements'

export const CountryCategoryLocationAdvertisementContent = () => {
  const { formatMessage } = useIntl()
  const { locationId, advertisementId, categoryId }: Record<string, any> = useParams()

  return (
    <Wrapper>
      <GoBackBtn />
      <Typography variant="h4" className="title">
        {formatMessage({ id: 'search.result.for' })} {formatMessage({ id: locationId })} ,{' '}
        {formatMessage({ id: categoryId })} ({formatMessage({ id: advertisementId })})
      </Typography>
      <AdvertisementsBox config={advertisementsConfig} />
    </Wrapper>
  )
}
