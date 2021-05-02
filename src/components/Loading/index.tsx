import { FC } from 'react'
import styled from 'styled-components'

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
const Loading: FC<LoadingProps> = () => <Wrapper>loading...</Wrapper>

export default Loading
