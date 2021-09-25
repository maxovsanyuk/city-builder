import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 432px;
  border-radius: 8px;
  padding: 40px;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.color.blueDefault};
  box-shadow: inset 0 0 2px 0 ${({ theme }) => theme.color.blueDefault};

  .title-h5 {
    margin: 20px 0 50px 0;
    font-weight: 600;
    color: ${({ theme }) => theme.color.blueDefault};
  }

  .form-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    .login-input {
      margin: 20px 20px 0 20px;
    }

    .submit-btn {
      background: ${({ theme }) => theme.color.blueDefault};
      font-weight: 600;
      max-width: 45%;
    }

    .link {
      text-align: left;
      margin: 10px 20px 20px 20px;
      text-decoration: underline;
      color: ${({ theme }) => theme.color.blueDefault};
    }

    .link-box {
      width: 100%;
      display: contents;
      text-align: left;
      margin: 10px 20px 20px 20px;
    }

    .btn-box {
      display: flex;
      margin: 120px 20px 0 20px;
      justify-content: space-between;

      button {
        display: flex;
        flex: 1;
      }
    }
  }
`
