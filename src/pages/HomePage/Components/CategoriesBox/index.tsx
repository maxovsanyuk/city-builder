import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { Wrapper } from './styles'
import { Typography } from '@material-ui/core'

const CotegoriesBox = ({ config, className, style }: Record<string, any>) => {
  const { formatMessage } = useIntl()

  return (
    <Wrapper style={style} className={className}>
      {config.map((categorie: Record<string, any>) => {
        return (
          <div key={categorie.name} className="cotegorie-box">
            <Link to={categorie?.link}>
              <img className="img" alt="" />
            </Link>
            <Typography variant="h5" className="title">
              {formatMessage({ id: categorie?.name })}
            </Typography>
          </div>
        )
      })}
    </Wrapper>
  )
}

export default CotegoriesBox
