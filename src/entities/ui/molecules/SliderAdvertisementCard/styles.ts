import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 20px 10px 0 10px;
  border-radius: 4px;

  .advertisement-box {
    display: flex;
    min-height: 400px;
    flex-direction: column;
    justify-content: space-between;
    background: ${({ theme }) => theme.color.white};
    position: relative;

    .advertisement-img {
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
    }
  }

  .gorizontal-box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .title {
    margin: 10px 0;
  }

  .rating {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 20px 0 10px 0;
  }

  .info-box {
    display: flex;
    justify-content: space-between;
    padding: 15px;
  }

  .user-type-icon {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 40px;
    height: 40px;
    background: ${({ theme }) => theme.color.white};
    background-size: contain;
    border-radius: 50%;
    z-index: 100;
  }
`
