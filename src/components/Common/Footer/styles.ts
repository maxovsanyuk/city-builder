import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.color.blackMiddle};
`
