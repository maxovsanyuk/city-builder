import { FC } from 'react'
import { Wrapper } from './style'
import { useIntl } from 'react-intl'
import { useStore } from 'effector-react'
import { Typography } from '@material-ui/core'
import { Container } from 'shared/ui/molecules/grid'
import { $user, UserInterface } from 'processes/auth/login-model'

const PersonalDataPage: FC = () => {
  const user = useStore($user)
  const { formatMessage } = useIntl()
  const { authorizationType, firstName, surname, location, email } = user as UserInterface

  return (
    <Container>
      <Wrapper>
        <Typography className="title" variant="h3" style={{ margin: '20px 0' }}>
          {formatMessage({ id: `${authorizationType.toLowerCase()}.personal.data.page` })}
        </Typography>

        <Typography className="title" variant="h6" gutterBottom>
          {formatMessage({ id: 'full.name' })} : {firstName} {surname}
        </Typography>

        <Typography className="title" variant="h6" gutterBottom>
          {formatMessage({ id: 'email' })} : {email}
        </Typography>

        <Typography className="title" variant="h6" gutterBottom>
          {formatMessage({ id: 'authorization.type' })} : {authorizationType}
        </Typography>

        <Typography className="title" variant="h6" gutterBottom>
          {formatMessage({ id: 'user.location' })} : {location}
        </Typography>
      </Wrapper>
    </Container>
  )
}

export default PersonalDataPage
