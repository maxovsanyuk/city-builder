import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.blackMiddle};
  border-bottom: 1px solid ${({ theme }) => theme.color.black};

  .header {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn-box {
      display: flex;
      align-items: center;
      position: relative;
    }

    .navigation-bar {
      position: absolute;
      top: 70px;
      left: -120px;
      background: ${({ theme }) => theme.color.blackMiddle};
      color: ${({ theme }) => theme.color.white};
      z-index: 100;

      .MuiButtonBase-root:hover {
        background: ${({ theme }) => theme.color.blueDefault};
      }
    }

    .user-navigation {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.color.greyLight};
      border-radius: 50%;
      margin: 0 30px 0 0;

      &:hover {
        cursor: pointer;
      }
    }

    .login-btn {
      margin: 0 30px 0 0;
    }

    .lang-swicher,
    label {
      color: ${({ theme }) => theme.color.white};
    }

    svg {
      fill: ${({ theme }) => theme.color.white};
    }

    .MuiInput-underline:before {
      border-bottom: 1px solid ${({ theme }) => theme.color.white};
    }
  }
`
