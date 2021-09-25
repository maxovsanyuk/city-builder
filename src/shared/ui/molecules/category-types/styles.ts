import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 80px 0;

  .cotegorie-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 50px;
    transition: 0.1s;

    &:hover {
      cursor: pointer;

      .title {
        transition: 0.1s;
        background: ${({ theme }) => theme.color.blueDefault};
        color: #fff;
      }
    }

    .img {
      width: 300px;
      height: 200px;
      border-radius: 2px;
      margin: 0 0 20px 0;
      background-size: cover !important;
    }

    .title {
      transition: 0.1s;
      color: ${({ theme }) => theme.color.blueDefault};
      background: ${({ theme }) => theme.color.white};
      padding: 0 10px;
    }
  }
`
