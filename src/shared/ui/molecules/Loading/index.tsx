import styled from 'styled-components'
import { FC } from 'react'
import { CircularProgress } from '@material-ui/core'

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Loading: FC = () => (
  <Wrapper>
    <CircularProgress />
  </Wrapper>
)
