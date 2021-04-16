import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 432px;
  height: 460px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: 40px;

  .h-4 {
    margin: 30px 0;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`
