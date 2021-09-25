import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.color.blueDefault};
  padding: 0 20px;

  a {
    color: ${({ theme }) => theme.color.white};
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  .social-cont {
    display: flex;

    a {
      margin: 0 10px 0 0;

      &:last-of-type {
        margin: 0;
      }
    }
  }
`
