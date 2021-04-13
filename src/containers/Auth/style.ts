import styled from 'styled-components'

import PCBpattern from '../../assets/PCBpattern.svg'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${({ theme }) => `${theme.colors.greyLight} url(${PCBpattern}) no-repeat right bottom`};
  padding: 0 5% 5% 5%;
  overflow: auto;

  .header {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
  }

  .children {
    height: 100%;
    display: flex;
    align-items: center;
  }
`
