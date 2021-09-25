import { FC } from 'react'
import { Wrapper } from './style'
import { useIntl } from 'react-intl'
import { Typography } from '@material-ui/core'
import { Container } from 'shared/ui/molecules/grid'

interface CreateEntrepreneurRequestProps {}
const CreateEntrepreneurRequest: FC<CreateEntrepreneurRequestProps> = () => {
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
