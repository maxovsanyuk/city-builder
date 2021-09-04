import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  margin: 40px 0;

  .content {
    display: flex;
    width: 100%;
    height: 140px;
    flex-direction: column;
    justify-content: space-between;
  }

  .advertisement-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.color.white};
    padding: 20px;
    border-radius: 3px;
    position: relative;

    &:hover {
      transition: 0.3s;
      box-shadow: 0 0 10px -2px ${({ theme }) => theme.color.blackLight};
      cursor: pointer;
    }

    .rating {
      display: flex;
      justify-content: center;
      margin: 10px 0;
    }

    .gorizontal-box {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    .img-wrapper {
      min-height: 250px;
    }

    .advertisement-img {
      width: 100%;
      margin: 0 0 20px 0;
    }

    .info-box {
      display: flex;
      width: 100%;
      justify-content: space-between;
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
  }
`
