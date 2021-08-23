import styled from 'styled-components'

export const Wrapper = styled.div`
  .awssld__controls__arrow-right:after,
  .awssld__controls__arrow-right:before,
  .awssld__controls__arrow-left:after,
  .awssld__controls__arrow-left:before {
    background-color: ${({ theme }) => theme.color.white};
  }
`
