import styled, { css } from 'styled-components'
import { fontStyle } from '../../components/styles/fontStyle'
import Colors from 'procredit-bank-design-system/modules/colors'

const { gray } = Colors

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 432px;
    height: 512px;
    background: ${gray[1]};
    border-radius: 16px;
    padding: 60px;

    .title {
      ${fontStyle(theme, 20, 'bold', 'lg')};
      margin: 30px 0;
    }

    form {
      display: flex;
      flex-direction: column;
    }
  `}
`
