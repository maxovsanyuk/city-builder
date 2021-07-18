import { FC } from 'react'
import { useIntl } from 'react-intl'
// import { useSelector } from 'react-redux'
import { Container } from 'components/Common/Grid'

import { Typography } from '@material-ui/core'
import { Wrapper } from './style'

interface CreateEntrepreneurRequestProps {}
const CreateEntrepreneurRequest: FC<CreateEntrepreneurRequestProps> = () => {
  // const { user } = useSelector(({ auth }) => auth)
  // const { authorizationType, fullName, location, email }: Record<string, any> = user

  const { formatMessage } = useIntl()

  return (
    <Container>
      <Wrapper>
        <Typography variant="h3" style={{ margin: '20px' }}>
          {formatMessage({ id: 'create.new.rerquest' })}
        </Typography>
      </Wrapper>
    </Container>
  )
}

export default CreateEntrepreneurRequest
