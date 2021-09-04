import styled from 'styled-components'
import { useIntl } from 'react-intl'
import { Button } from '@material-ui/core'
import { history } from 'shared/services/navigation'

const ButtonWrapper = styled(Button)`
  position: absolute !important;
  top: -20px;
`

export const GoBackBtn: React.FC = () => {
  const { formatMessage } = useIntl()

  return <ButtonWrapper onClick={() => history.goBack()}>{formatMessage({ id: 'go.back' })}</ButtonWrapper>
}
