import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 432px;
  border-radius: 8px;
  padding: 60px 40px;
  background: ${({ theme }) => theme.color.white};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.color.blackLight};

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
      background: ${({ theme }) => theme.color.blueDefault};
      font-weight: 600;
      margin: 40px 20px 0 20px;
    }

    .link {
      text-align: left;
      margin: 10px 20px 20px 20px;
    }

    .btn-box {
      display: flex;

      button {
        display: flex;
        flex: 1;
      }
    }
  }
`
