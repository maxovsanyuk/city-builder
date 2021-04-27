import styled from 'styled-components'

import Colors from 'procredit-bank-design-system/modules/colors'
const { gray } = Colors

export const Wrapper = styled.div`
  width: 432px;
  height: 460px;
  color: ${gray[1]};
  border-radius: 16px;
  padding: 40px;

  .h-4 {
    margin: 40px 0 30px 0;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`
