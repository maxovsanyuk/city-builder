import { FC } from 'react'
import { Wrapper } from './style'
import { useIntl } from 'react-intl'
import { useStore } from 'effector-react'
import { Container } from 'shared/ui/molecules/Grid'
import { Paper, Typography } from '@material-ui/core'
import { $user, UserInterface } from 'processes/auth/login-model'

interface PersonalDataPageProps {}
const PersonalDataPage: FC<PersonalDataPageProps> = () => {
  const user = useStore($user)
  const { authorizationType, firstName, surname, location, email } = user as UserInterface
  const { formatMessage } = useIntl()

  return (
    <Container>
      <Wrapper>
        <Typography variant="h3" style={{ margin: '20px' }}>
          {formatMessage({ id: `${authorizationType.toLowerCase()}.personal.data.page` })}
        </Typography>

        <Paper elevation={0} className="paper">
          <Typography variant="h6" gutterBottom>
            {formatMessage({ id: 'full.name' })} : {firstName} {surname}
          </Typography>
        </Paper>
        <Paper elevation={0} className="paper">
          <Typography variant="h6" gutterBottom>
            {formatMessage({ id: 'email' })} : {email}
          </Typography>
        </Paper>
        <Paper elevation={0} className="paper">
          <Typography variant="h6" gutterBottom>
            {formatMessage({ id: 'authorization.type' })} : {authorizationType}
          </Typography>
        </Paper>

        <Paper elevation={0} className="paper">
          <Typography variant="h6" gutterBottom>
            {formatMessage({ id: 'user.location' })} : {location}
          </Typography>
        </Paper>
      </Wrapper>
    </Container>
  )
}

export default PersonalDataPage
