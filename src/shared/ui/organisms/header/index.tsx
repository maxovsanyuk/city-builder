import * as React from 'react'
import * as model from 'processes/auth/login-model'
import get from 'lodash/get'
import Logo from 'shared/assets/logo.svg'
import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { useStore } from 'effector-react'
import { Container } from 'shared/ui/molecules'
import { LangSwitcher } from 'features/ui/molecules'
import { UserHeaderInfoBox } from 'entities/ui/molecules'
import { Button, Typography, Box } from '@material-ui/core'

export const Header = () => {
  const user = useStore(model.$user)
  const { formatMessage } = useIntl()

  return (
    <Wrapper>
      <Container>
        <div className="header">
          <Link to="/city-builder">
            <img src={Logo} alt="logo" width={50} />
          </Link>

          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Link to="/city-builder/contact">
              <Typography sx={{ minWidth: 100 }}>{formatMessage({ id: 'contact' })}</Typography>
            </Link>
            <LangSwitcher />
            {get(user, 'token') ? (
              <UserHeaderInfoBox user={user} />
            ) : (
              <Button style={{ background: '#fff' }} href="/login" variant="outlined">
                {formatMessage({ id: 'login' })}
              </Button>
            )}
          </Box>
        </div>
      </Container>
    </Wrapper>
  )
}
