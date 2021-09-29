import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { AdvertisementsBox, GoBackBtn } from 'shared/ui/molecules'
import { advertisementsConfig } from 'shared/mock/advertisements'

export const CountryCategoryAdvertisementContent = () => {
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
