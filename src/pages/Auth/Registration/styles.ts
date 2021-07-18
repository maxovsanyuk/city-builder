import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 432px;
  border-radius: 8px;
  padding: 40px;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.color.blackLight};
  box-shadow: inset 0 0 2px 0 ${({ theme }) => theme.color.blackLight};

  .form-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    .login-input {
      margin: 10px 20px 0 20px;
    }

    .submit-btn {
      margin: 40px 20px 0 20px !important;
      background: ${({ theme }) => theme.color.blackMiddle};
      font-weight: 600;
    }

    .btn-box {
      display: flex;

      button {
        display: flex;
        flex: 1;
      }
    }

    .form-select {
      margin: 10px 20px;
      text-align: left;
    }
  }
`
