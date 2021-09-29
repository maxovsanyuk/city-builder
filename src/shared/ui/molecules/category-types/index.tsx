import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { defineAdvertisementTypeIcon } from '../../../lib/helpers/define-advertisement-type-icon'

export const CotegoryTypes = ({ config, className, style }: Record<string, any>) => {
  const { formatMessage } = useIntl()

  return (
    <Wrapper style={style} className={className}>
      {config.map((categorie: Record<string, any>) => {
        return (
          <Link to={categorie?.link} key={categorie.name} className="cotegorie-box">
            <img
              className="cotegory-type-icon"
              width={200}
              src={defineAdvertisementTypeIcon(categorie.type)}
              alt="icon"
            />

            <Typography variant="h5" className="title">
              {formatMessage({ id: categorie?.name })}
            </Typography>
          </Link>
        )
      })}
    </Wrapper>
  )
}
