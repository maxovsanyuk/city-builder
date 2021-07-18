import { useIntl } from 'react-intl'
import { Wrapper } from './styles'
import { Typography } from '@material-ui/core'
import CotegoriesBox from '../CategoriesBox'

const categoriesConfig = [
  { name: '1', link: '/category/1/top-entrepreneur-requests' },
  { name: '2', link: '/category/2/top-entrepreneur-requests' },
  { name: '3', link: '/category/3/top-entrepreneur-requests' },
  { name: '4', link: '/category/4/top-entrepreneur-requests' },
  { name: '5', link: '/category/5/top-entrepreneur-requests' },
  { name: '6', link: '/category/6/top-entrepreneur-requests' },
  { name: '7', link: '/category/7/top-entrepreneur-requests' },
  { name: '8', link: '/category/8/top-entrepreneur-requests' },
  { name: '9', link: '/category/9/top-entrepreneur-requests' },
  { name: '10', link: '/category/10/top-entrepreneur-requests' },
]

const MostPopularInEntrepreneurRequests = () => {
  const { formatMessage } = useIntl()

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {formatMessage({ id: 'most.popular.entrepreneurs.categories.requests' })}
      </Typography>

      <CotegoriesBox config={categoriesConfig} />
    </Wrapper>
  )
}

export default MostPopularInEntrepreneurRequests
