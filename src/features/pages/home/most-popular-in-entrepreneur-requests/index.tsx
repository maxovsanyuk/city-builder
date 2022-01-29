import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { Typography } from '@material-ui/core'
import { CotegoriesBox } from 'shared/ui/molecules'
import { categoriesEntrepreneurConfig } from 'shared/mock/categories'

export const MostPopularInEntrepreneurRequests = () => {
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
