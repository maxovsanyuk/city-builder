import { useIntl } from 'react-intl'
import { Wrapper } from './styles'
import { Typography } from '@material-ui/core'
import CotegoriesBox from '../CategoriesBox'

const categoriesConfig = [
  { name: '1', link: '/country/category/1' },
  { name: '2', link: '/country/category/2' },
  { name: '3', link: '/country/category/3' },
  { name: '4', link: '/country/category/4' },
  { name: '5', link: '/country/category/5' },
  { name: '6', link: '/country/category/6' },
  { name: '7', link: '/country/category/7' },
  { name: '8', link: '/country/category/8' },
  { name: '9', link: '/country/category/9' },
  { name: '10', link: '/country/category/10' },
  { name: '11', link: '/country/category/11' },
  { name: '12', link: '/country/category/12' },
]

const MostPopularInCountry = () => {
  const { formatMessage } = useIntl()

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {formatMessage({ id: 'most.popular.categories.in.country' })}
      </Typography>

      <CotegoriesBox config={categoriesConfig} />
    </Wrapper>
  )
}

export default MostPopularInCountry
