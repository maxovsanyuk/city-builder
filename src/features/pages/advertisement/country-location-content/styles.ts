import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 400px;
  padding: 20px 5% 40px 5%;

  .title {
    text-align: center;
    color: ${({ theme }) => theme.color.blackMiddle};
    margin: 0 0 10px 0;
  }
`
