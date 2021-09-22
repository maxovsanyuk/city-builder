import styled from 'styled-components'
import { mq } from 'shared/settings/theme'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 1600px;
  margin: 40px 0 100px 0;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  grid-template-rows: 0.5fr 0.5fr 1fr 1fr;
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

    div:first-of-type {
      height: 100%;
    }
  }

  ${mq(1400, 'max')} {
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      '. .'
      'location-info location-info'
      'post-info-box post-info-box'
      'contact-box contact-box';

    .photos-slider {
      grid-area: unset;
    }
  }
`
