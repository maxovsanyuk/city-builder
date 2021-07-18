import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 40px 0;

  .cotegorie-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px 40px 20px;

    .img {
      width: 110px;
      height: 110px;
      background: #647895;
      border-radius: 50%;
      margin: 0 0 20px 0;
    }
  }
`
