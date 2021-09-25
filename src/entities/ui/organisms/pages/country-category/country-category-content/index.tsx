import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { advertisementsConfig } from 'settings/mock/advertisements'
import { GoBackBtn, AdvertisementsBox, CotegoryTypes } from 'shared/ui/molecules'

export const CountryCategoryContent = () => {
  const { formatMessage } = useIntl()
  const { categoryId }: Record<string, any> = useParams()

  const categoriesConfig = [
    {
      name: 'Citizen requests',
      link: `/country/category/${categoryId}/citizen-requests`,
      imgUrl:
        'https://capacitycooperation.danube-region.eu/wp-content/uploads/sites/3/sites/3/2020/02/Citizen-engagement.jpg',
    },
    {
      name: 'Entrepreneurs requests',
      link: `/country/category/${categoryId}/entrepreneur-requests`,
      imgUrl:
        'https://media.istockphoto.com/vectors/teamwork-related-vector-illustration-concept-for-application-and-vector-id1147403096?k=6&m=1147403096&s=612x612&w=0&h=HBkxP4-1b55OaI_ap0UVKZ8h_1A7E-OWuutmiTOLzzM=',
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
