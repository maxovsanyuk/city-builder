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
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
      }
    }

    .img {
      width: 200px;
      height: 200px;
      background: #647895;
      border-radius: 50%;
      margin: 0 0 20px 0;
      border: 1px solid #f2f2f2;
      background-size: cover !important;
    }

    .title {
      transition: 0.1s;
      color: rgba(0, 0, 0, 0.8);
      background: #fff;
    }
  }
`
