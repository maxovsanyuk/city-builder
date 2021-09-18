import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.color.white};
  padding: 40px 30px 30px 30px;

  .link {
    text-decoration: underline;
    margin: 5px 0 0 110px;
  }

  .user-info {
    width: 100%;
    display: flex;

    .user-avatar {
      width: 80px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.greyMedium};
    }

    .details-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0 0 0 30px;
      color: ${({ theme }) => theme.color.greyMedium};
    }
  }

  .btn-box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 30px 0 0 0;

    button {
      width: calc(50% - 5px);
    }
  }
`
