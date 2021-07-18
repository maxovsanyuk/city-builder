import { useIntl } from 'react-intl'
import { Wrapper } from './styles'
import { Typography } from '@material-ui/core'
import CotegoriesBox from '../CategoriesBox'

const categoriesConfig = [
  { name: '1', link: '/category/1/top-citizen-requests' },
  { name: '2', link: '/category/2/top-citizen-requests' },
  { name: '3', link: '/category/3/top-citizen-requests' },
  { name: '4', link: '/category/4/top-citizen-requests' },
  { name: '5', link: '/category/5/top-citizen-requests' },
  { name: '6', link: '/category/6/top-citizen-requests' },
  { name: '7', link: '/category/7/top-citizen-requests' },
]

const MostPopularInCitizenRequests = () => {
  const { formatMessage } = useIntl()

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {formatMessage({ id: 'most.popular.citiziens.categories.requests' })}
      </Typography>

      <CotegoriesBox config={categoriesConfig} />
    </Wrapper>
  )
}

export default MostPopularInCitizenRequests
