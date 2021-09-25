import styled from 'styled-components'

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  width: 90%;
  height: 80px;
  margin: 40px 5%;
  background: ${({ theme }) => theme.color.white};

  .MuiFormControl-root {
    margin: 0;
  }

  .category-search-input,
  .location-search-input {
    height: 100%;
    display: flex;
    align-items: center;
    border-right: 3px solid ${({ theme }) => theme.color.whiteMain};
    padding: 0 20px;

    &:hover {
      cursor: pointer;
    }
  }

  .advertisements-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-right: 3px solid ${({ theme }) => theme.color.whiteMain};
  }

  .advertisement-input {
    width: 100%;
  }

  .submit-btn-box {
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
`
