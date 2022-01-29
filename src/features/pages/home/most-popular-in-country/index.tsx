import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { Typography } from '@material-ui/core'
import { CotegoriesBox } from 'shared/ui/molecules'
import { categoriesCountryConfig } from 'shared/mock/categories'

export const MostPopularInCountry = () => {
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
