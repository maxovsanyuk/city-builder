import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 432px;
  border-radius: 8px;
  padding: 40px;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.color.blueDefault};

  .h-5 {
    color: ${({ theme }) => theme.color.blueDefault};
  }

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
      background: ${({ theme }) => theme.color.blueDefault};
      font-weight: 600;
      box-shadow: none;
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
