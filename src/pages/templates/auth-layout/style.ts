import styled from 'styled-components'
import logo from 'shared/assets/auth.jpg'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  background: url(${logo}) no-repeat 20% 40%;
  background-size: 35%;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ theme }) => theme.color.blackLight};
    -webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.color.white} inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  .children {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`
