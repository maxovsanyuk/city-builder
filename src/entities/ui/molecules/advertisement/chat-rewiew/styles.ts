import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.color.white};
  padding: 40px 30px 30px 30px;

  .sent-btn {
    background: ${({ theme }) => theme.color.blueDefault};
  }
`
