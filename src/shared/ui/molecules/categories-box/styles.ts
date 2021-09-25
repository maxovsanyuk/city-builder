import styled from 'styled-components'

export const Wrapper = styled.div<{ currentCategoryIndex: number }>`
  width: 100%;
  margin: 40px 0 0 0;

  .cotegorie-list {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 0 10px;
  }

  .cotegorie-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 30px 0;
    transition: 0.2s;

    &:hover {
      cursor: pointer;

      .title {
        transition: 0.1s;
        background: rgba(0, 0, 0, 0.8);
        background: ${({ theme }) => theme.color.white};
      }
    }

    .img {
      width: 90px;
      height: 90px;
      background: ${({ theme }) => theme.color.blueDefault};
      border-radius: 50%;
      margin: 0 0 20px 0;
      border: 1px solid ${({ theme }) => theme.color.whiteMiddle};
      background-size: cover !important;
    }
  }

  .categories-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
    border: 1px solid #efefef;
    background: #fff;
    padding: 23px 26px;
    margin-bottom: 30px;
    border-radius: 3px;
    position: relative;

    .category-link {
      min-height: 40px;
      word-break: break-all;

      &:hover {
        text-decoration: underline;
      }
    }

    .icon {
      position: absolute;
      top: -12px;
      left: ${({ currentCategoryIndex }) => `${12.5 * (currentCategoryIndex + 1) - 7.5}%`};
    }
  }

  .title {
    font-size: 14px;
    font-weight: 600;
  }
`
