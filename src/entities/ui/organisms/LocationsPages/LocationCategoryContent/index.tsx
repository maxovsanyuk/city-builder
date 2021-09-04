import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { GoBackBtn, AdvertisementsBox, CotegoriesTypes } from 'shared/ui/molecules'

export const LocationCategoryContent = () => {
  const { formatMessage } = useIntl()
  const { locationId, categoryId }: Record<string, any> = useParams()

  const advertisementsConfig = [
    { name: '1', link: `/advertisement/1/location/${locationId}` },
    { name: '2', link: `/advertisement/2/location/${locationId}` },
    { name: '3', link: `/advertisement/3/location/${locationId}` },
    { name: '4', link: `/advertisement/4/location/${locationId}` },
    { name: '5', link: `/advertisement/5/location/${locationId}` },
  ]

  const categoriesConfig = [
    {
      name: 'Citizen requests',
      link: `/location/${locationId}/category/${categoryId}/citizen-requests/`,
      imgUrl:
        'https://capacitycooperation.danube-region.eu/wp-content/uploads/sites/3/sites/3/2020/02/Citizen-engagement.jpg',
    },
    {
      name: 'Entrepreneurs requests',
      link: `/location/${locationId}/category/${categoryId}/entrepreneur-requests/`,
      imgUrl:
        'https://media.istockphoto.com/vectors/teamwork-related-vector-illustration-concept-for-application-and-vector-id1147403096?k=6&m=1147403096&s=612x612&w=0&h=HBkxP4-1b55OaI_ap0UVKZ8h_1A7E-OWuutmiTOLzzM=',
    },
  ]

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {locationId} {formatMessage({ id: `category.${categoryId}` })}
      </Typography>
      <CotegoriesTypes config={categoriesConfig} className="cotegories-box" />
      <Typography variant="h4" className="title">
        {formatMessage({ id: 'another.advertisements' })}
      </Typography>

      <GoBackBtn />

      <AdvertisementsBox config={advertisementsConfig} />
    </Wrapper>
  )
}
