import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 40px 0 0 0;
  border: 1px solid ${({ theme }) => theme.color.greyTransparent};
  background: ${({ theme }) => theme.color.whiteMain};
  border-radius: 2px;
`
