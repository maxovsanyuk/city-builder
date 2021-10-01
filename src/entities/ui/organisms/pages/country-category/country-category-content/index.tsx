import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { advertisementsConfig } from 'shared/mock/advertisements'
import { GoBackBtn, AdvertisementsBox, CotegoryTypes } from 'shared/ui/molecules'

export const CountryCategoryContent = () => {
  const { formatMessage } = useIntl()
  const { categoryId }: Record<string, any> = useParams()

  const categoriesConfig = [
    {
      name: 'Citizen requests',
      link: `/city-builder/country/category/${categoryId}/citizen-requests`,
      type: 'citizen',
    },
    {
      name: 'Entrepreneurs requests',
      link: `/city-builder/country/category/${categoryId}/entrepreneur-requests`,
      type: 'entrepreneur',
    },
  ]

  return (
    <Wrapper>
      <GoBackBtn />
      <Typography variant="h4" className="title">
        {formatMessage({ id: 'country.category' })} {categoryId}
      </Typography>

      <CotegoryTypes config={categoriesConfig} />

      <Typography variant="h4" className="title">
        {formatMessage({ id: 'advertisements' })}
      </Typography>

      <AdvertisementsBox config={advertisementsConfig} />
    </Wrapper>
  )
}
