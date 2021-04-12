import styled from 'styled-components'
import { fontStyle } from '../../components/styles/fontStyle'

export const Wrapper = styled.div`
  width: 432px;
  height: 512px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: 60px;

  .title {
    ${({ theme }) => fontStyle(theme, 20, 'bold', 'lg')};
    margin: 30px 0;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`
