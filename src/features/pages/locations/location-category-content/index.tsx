import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { GoBackBtn, AdvertisementsBox, CotegoryTypes } from 'shared/ui/molecules'
import { advertisementsConfig } from 'shared/mock/advertisements'

export const LocationCategoryContent = () => {
  const { formatMessage } = useIntl()
  const { locationId, categoryId }: Record<string, any> = useParams()

  const categoriesConfig = [
    {
      name: 'Citizen requests',
      link: `/location/${locationId}/category/${categoryId}/citizen-requests/`,
      type: 'citizen',
    },
    {
      name: 'Entrepreneurs requests',
      link: `/location/${locationId}/category/${categoryId}/entrepreneur-requests/`,
      type: 'entrepreneur',
    },
  ]

  return (
    <Wrapper>
      <GoBackBtn />

      <Typography variant="h4" className="title">
        {locationId} {formatMessage({ id: `category.${categoryId}` })}
      </Typography>
      <CotegoryTypes config={categoriesConfig} className="cotegories-box" />
      <Typography variant="h4" className="title">
        {formatMessage({ id: 'another.advertisements' })}
      </Typography>

      <AdvertisementsBox config={advertisementsConfig} />
    </Wrapper>
  )
}
