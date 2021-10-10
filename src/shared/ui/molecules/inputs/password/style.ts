import styled from 'styled-components'

export const PasswordInputComponent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;

  .password-input {
    width: 100%;
    padding: 10px 40px 5px 0;
    margin: 0 20px;
    color: ${({ theme }) => theme.color.blackLight};

    &::placeholder {
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
      font-weight: 400;
      line-height: 1.1876em;
      color: ${({ theme }) => theme.color.blackLight};
    }
  }

  .hide-password-icon {
    position: absolute;
    right: ${({ isPasswordErr }: Record<string, any>) => (isPasswordErr ? '60px' : '30px')};
    top: 55%;
    transform: translateY(-50%);

    &:hover {
      cursor: pointer;
    }
  }

  .check-password-box {
    position: absolute;
    top: calc(100% + 4px);
    left: 20px;
    width: calc(100% - 40px);
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.blackLight};
    box-shadow: inset 0 0 2px 0 ${({ theme }) => theme.color.blackLight};
    padding: 10px;
    border-radius: 4px;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    .password-title {
      display: flex;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0 0 10px 0;
      text-align: center;
      color: ${({ theme }) => theme.color.blackLight};
      font-weight: 600;
    }
  }

  .validation-row {
    display: flex;
    margin: 10px 0 0 0;
  }

  .error-icon {
    transition: 0.3s;
    position: absolute;
    right: 30px;
    top: 55%;
    transform: translateY(-50%);

    &:hover {
      cursor: pointer;
    }
  }
`
