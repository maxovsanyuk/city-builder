import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { Typography } from '@material-ui/core'
import { CotegoriesBox } from 'shared/ui/molecules'
import { categoriesCitizenConfig } from 'settings/mock/categories'

export const MostPopularInCitizenRequests = () => {
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
