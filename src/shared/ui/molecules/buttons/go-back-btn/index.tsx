import styled from 'styled-components'
import { history } from 'services/navigation'
import { ArrowBack } from '@material-ui/icons'
import { ListItemIcon } from '@material-ui/core'

const ButtonWrapper = styled.span`
  &:hover {
    cursor: pointer;

    svg {
      fill: ${({ theme }) => theme.color.blueDefault};
    }
  }
`

export const GoBackBtn: React.FC = () => {
  return (
    <ButtonWrapper onClick={() => history.goBack()}>
      <ListItemIcon>
        <ArrowBack fontSize="medium" />
      </ListItemIcon>
    </ButtonWrapper>
  )
}
