import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { Typography } from '@material-ui/core'
import { CotegoriesBox } from 'shared/ui/organisms'
import { categoriesCountryConfig } from 'shared/settings/mock/categories'

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
