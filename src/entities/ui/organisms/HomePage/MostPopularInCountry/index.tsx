import CotegoriesBox from '../../../../../features/Common/ui/organisms/CategoriesBox'
import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { Typography } from '@material-ui/core'
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
