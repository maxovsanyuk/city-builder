import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 400px;
  height: calc(100% - 110px);
  margin: 40px 0 0 0;
  padding: 20px 5% 80px 5%;

  .title {
    text-align: center;
    color: ${({ theme }) => theme.color.blueDefault};
    margin: 0 0 10px 0;
  }
`
