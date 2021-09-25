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
