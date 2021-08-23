import { useIntl } from 'react-intl'
import { Wrapper } from './styles'
import { Typography } from '@material-ui/core'
import CotegoriesBox from '../../../../../features/Common/ui/organisms/CategoriesBox'
import { categoriesCountryConfig } from '../../../../../shared/settings/mock/categories'

const MostPopularInCountry = () => {
  const { formatMessage } = useIntl()

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {formatMessage({ id: 'most.popular.categories.in.country' })}
      </Typography>

      <CotegoriesBox config={categoriesCountryConfig} />
    </Wrapper>
  )
}

export default MostPopularInCountry
