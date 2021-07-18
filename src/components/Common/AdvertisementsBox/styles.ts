import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  flex-wrap: wrap;
  margin: 40px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;

  .cotegorie-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.color.white};
    padding: 20px;
    border-radius: 3px;

    .img {
      width: 350px;
      height: 250px;
      background: ${({ theme }) => theme.color.greyMedium};
      margin: 0 0 20px 0;
    }
  }
`
