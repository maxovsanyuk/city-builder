import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 71px);
  background: ${({ theme }) => theme.color.greyLight};

  .children {
    width: 100%;
    height: 100%;
    padding: 20px;
    background: ${({ theme }) => theme.color.white};
  }
`
