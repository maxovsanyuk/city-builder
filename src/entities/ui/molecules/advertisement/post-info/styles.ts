import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.color.white};
  padding: 30px;
  position: relative;

  .user-type-icon {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .rating {
    margin: 0 0 0 20px;
  }
`

export const PostInfoFooter = styled.div`
  display: flex;
  justify-content: space-between;
`
