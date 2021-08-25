import CotegoriesBox from '../../../../../features/Common/ui/organisms/CategoriesBox'
import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { Typography } from '@material-ui/core'
import { categoriesEntrepreneurConfig } from '../../../../../shared/settings/mock/categories'

const MostPopularInEntrepreneurRequests = () => {
  const { formatMessage } = useIntl()

  return (
    <Wrapper>
      <Typography variant="h4" className="title">
        {formatMessage({ id: 'most.popular.entrepreneurs.categories.country.requests' })}
      </Typography>

      <CotegoriesBox config={categoriesEntrepreneurConfig} />
    </Wrapper>
  )
}

export default MostPopularInEntrepreneurRequests
