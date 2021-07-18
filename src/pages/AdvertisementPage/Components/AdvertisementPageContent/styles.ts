import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 400px;
  height: calc(100% - 110px);
  margin: 40px 0 0 0;
  padding: 60px 5% 40px 5%;

  .title {
    text-align: center;
    color: ${({ theme }) => theme.color.blackMiddle};
    margin: 0 0 50px 0;
  }
`
