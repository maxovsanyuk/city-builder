import { FC } from 'react'
import { useIntl } from 'react-intl'
import { useSelector } from 'react-redux'
import { Container } from 'components/Common/Grid'

import { Paper, Typography } from '@material-ui/core'
import { Wrapper } from './style'

interface PersonalDataPageProps {}
const PersonalDataPage: FC<PersonalDataPageProps> = () => {
  const { user } = useSelector(({ auth }) => auth)
  const { authorizationType, fullName, location, email }: Record<string, any> = user

  const { formatMessage } = useIntl()

  return (
    <Container>
      <Wrapper>
        <Typography variant="h3" style={{ margin: '20px' }}>
          {formatMessage({ id: `${authorizationType.toLowerCase()}.personal.data.page` })}
        </Typography>

        <Paper elevation={0} className="paper">
          <Typography variant="h6" gutterBottom>
            {formatMessage({ id: 'full.name' })} : {fullName}
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
