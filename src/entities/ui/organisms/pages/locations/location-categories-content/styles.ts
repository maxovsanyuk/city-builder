import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 400px;
  margin: 40px 0 0 0;
  padding: 20px 5%;
  position: relative;

  .title {
    text-align: center;
    color: ${({ theme }) => theme.color.blackMiddle};
    margin: 0 0 10px 0;
  }
`
