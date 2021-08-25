import styled from 'styled-components'
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 95%;

  .link:hover {
    text-decoration: underline;
  }
`

interface NotFoundProps {}
const NotFound: FC<NotFoundProps> = () => {
  const { formatMessage } = useIntl()
  return (
    <Wrapper>
      <Typography variant="h3" style={{ margin: '20px' }}>
        {formatMessage({ id: '404.not.found', defaultMessage: '404 | Not found' })}
      </Typography>
      <Typography variant="h6">
        <Link to="/" className="link">
          {formatMessage({ id: 'back.to.main.page', defaultMessage: 'Back to main page' })}
        </Link>
      </Typography>
    </Wrapper>
  )
}

export default NotFound
