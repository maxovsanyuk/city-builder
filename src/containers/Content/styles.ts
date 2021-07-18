import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 40px 0 0 0;
  border: 1px solid ${({ theme }) => theme.color.greyTransparent};
  background: ${({ theme }) => theme.color.whiteMain};
  border-radius: 2px;
  overflow: auto;

  .content-wrapper {
    display: flex;
    height: 100%;
    min-height: 800px;
    flex-direction: column;
    justify-content: space-between;
  }

  form {
    display: flex;
    width: 90%;
    height: 80px;
    margin: 40px 5%;
    background: ${({ theme }) => theme.color.white};

    .MuiFormControl-root {
      margin: 0;
    }

    .category-search-input,
    .location-search-input {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      border-right: 3px solid ${({ theme }) => theme.color.whiteMain};
      padding: 0 20px;

      &:hover {
        cursor: pointer;
      }
    }

    .location-search-input {
      width: 35%;
    }

    .submit-btn-box {
      width: 15%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .submit-btn {
        width: 90%;
        height: 80%;
        background: none;
        box-shadow: none;
      }
    }
  }
`
