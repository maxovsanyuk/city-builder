import { FC } from 'react'
import styled from 'styled-components'
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

interface LoadingProps {}
const Loading: FC<LoadingProps> = () => (
  <Wrapper>
    <CircularProgress />
  </Wrapper>
)

export default Loading
