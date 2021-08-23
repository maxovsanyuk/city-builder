import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 1600px;
  margin: 40px 0 100px 0;
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px 20px;
  grid-template-areas:
    '. .'
    '. .'
    'contact-box contact-box';

  .contact-box {
    grid-area: contact-box;
  }
`
