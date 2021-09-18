import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 1600px;
  margin: 40px 0 100px 0;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1.3fr 0.7fr;
  grid-template-rows: 0.3fr 0.7fr 1.8fr 1fr;
  gap: 20px;
  grid-template-areas:
    'photos-slider user-info'
    'photos-slider location-info'
    'post-info-box post-info-box'
    'contact-box contact-box';

  .photos-slider {
    grid-area: photos-slider;
  }
  .post-info-box {
    grid-area: post-info-box;
  }
  .contact-box {
    grid-area: contact-box;
  }
  .user-info {
    grid-area: user-info;
  }
  .location-info {
    grid-area: location-info;
  }
`
