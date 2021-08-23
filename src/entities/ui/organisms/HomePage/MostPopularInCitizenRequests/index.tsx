import { useIntl } from 'react-intl'
import { Wrapper } from './styles'
import { Typography } from '@material-ui/core'
import CotegoriesBox from '../../../../../features/Common/ui/organisms/CategoriesBox'
import { categoriesCitizenConfig } from '../../../../../shared/settings/mock/categories'

const MostPopularInCitizenRequests = () => {
  const { formatMessage } = useIntl()

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {formatMessage({ id: 'most.popular.country.citiziens.categories.requests' })}
      </Typography>

      <CotegoriesBox config={categoriesCitizenConfig} />
    </Wrapper>
  )
}

export default MostPopularInCitizenRequests
