import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 24px;
  padding-left: 24px;
  max-width: 100%;
  width: 100%;

  @media (min-width: 576px) {
    width: 576px;
  }
  @media (min-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
    width: 768px;
  }
  @media (min-width: 1025px) {
    width: 1024px;
  }
  @media (min-width: 1200px) {
    width: 1185px;
  }

  @media (min-width: 1450px) {
    width: 1440px;
  }
`

export const ScrollHorizontal = styled.div`
  overflow: auto;
  padding-left: 24px;
  width: 100vw;

  @media (min-width: 576px) {
    padding-left: calc(100vw / 2 - 536px / 2);
    margin-left: calc((100vw / 2 - 536px / 2) * -1);
  }

  @media (min-width: 768px) {
    padding-left: calc(100vw / 2 - 728px / 2);
    margin-left: calc((100vw / 2 - 728px / 2) * -1);
  }

  @media (min-width: 1025px) {
    padding-left: calc(100vw / 2 - 984px / 2);
    margin-left: calc((100vw / 2 - 984px / 2) * -1);
  }

  @media (min-width: 1200px) {
    padding-left: calc(100vw / 2 - 1135px / 2);
    margin-left: calc((100vw / 2 - 1135px / 2) * -1);
  }

  @media (max-width: 575px) {
    margin-left: -24px;
    margin-right: -24px;
    padding-right: 24px;
  }
`
