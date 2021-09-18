import styled from 'styled-components'

export const Wrapper = styled.div`
  .awssld__controls__arrow-right:after,
  .awssld__controls__arrow-right:before,
  .awssld__controls__arrow-left:after,
  .awssld__controls__arrow-left:before {
    background-color: ${({ theme }) => theme.color.white};
  }

  .awssld__bullets {
    button {
      width: 12px;
      height: 12px;
      background-color: ${({ theme }) => theme.color.blueMedium};
    }
    .awssld__bullets--active {
      transform: scale(1);
      width: 14px;
      height: 14px;
    }
  }
`
