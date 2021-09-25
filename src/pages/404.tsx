import styled from 'styled-components'
import AuthLayout from './templates/auth-layout'
import { useIntl } from 'react-intl'
import { Typography } from '@material-ui/core'
import { Link, Route } from 'react-router-dom'

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

export const NotFound = () => {
  const { formatMessage } = useIntl()

  return (
    <>
      {['/404', '*'].map((path: string) => (
        <Route path={path} key={path}>
          <AuthLayout>
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
          </AuthLayout>
        </Route>
      ))}
    </>
  )
}
