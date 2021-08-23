import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { Wrapper } from './styles'
import { Typography } from '@material-ui/core'

const CotegoriesTypes = ({ config, className, style }: Record<string, any>) => {
  const { formatMessage } = useIntl()

  return (
    <Wrapper style={style} className={className}>
      {config.map((categorie: Record<string, any>) => {
        return (
          <Link to={categorie?.link} key={categorie.name} className="cotegorie-box">
            <img
              className="img"
              alt=""
              style={categorie?.imgUrl && { background: `url(${categorie?.imgUrl})center no-repeat` }}
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

export default CotegoriesTypes
