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
`
