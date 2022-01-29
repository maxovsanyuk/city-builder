import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { advertisementsConfig } from 'shared/mock/advertisements'
import { GoBackBtn, AdvertisementsBox } from 'shared/ui/molecules'

export const LocationCategoryEntrepreneurRequestsContent = () => {
  const { formatMessage } = useIntl()
  const { locationId, categoryId }: Record<string, any> = useParams()

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {locationId} {formatMessage({ id: `category.${categoryId}` })} {formatMessage({ id: 'entrepreneur.requests' })}
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
