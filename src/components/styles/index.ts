import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      font-size: 16px;
      line-height: 1.5;
      color: ${theme.colors.black};
      font-family: ${theme.fonts.inter}, ${theme.fonts.arial}};
    }
  `}

  @-webkit-viewport {
    width: device-width;
  }

  @-moz-viewport {
    width: device-width;
  }

  @-ms-viewport {
    width: device-width;
  }

  @-o-viewport {
    width: device-width;
  }

  @viewport {
    width: device-width;
  }

  //smooth those fonts
  body,
  input,
  button,
  select,
  textarea {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  // HTML5 display-role reset for older browsers
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body,
  html {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  b,
  strong {
    font-weight: bold;
  }

  input,
  select,
  textarea,
  button {
    -webkit-appearance: none;
    border-radius: 0;
  }

  select {
    -webkit-appearance: menulist-button;
  }

  select::-ms-expand {
    display: none;
  }

  textarea {
    resize: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    line-height: inherit;
    font-size: 100%;
    font: inherit;
    color: inherit;
    vertical-align: baseline;
    outline: none;
  }

  img,
  picture {
    display: block;
    height: auto;
  }

  button,
  input,
  textarea {
    background: transparent;
    border: 0;
    outline: 0;
    font: inherit;
    color: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  iframe {
    display: block;
    max-width: 100%;
  }

  html,
  body,
  #app {
    height: 100%;
  }

  .svg-sprite {
    &,
    svg {
      height: 0;
      width: 0;
      position: absolute;
      overflow: hidden;
    }
  }

  .fit-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    font-family: 'object-fit: cover; object-position: center;';
  }

  .fit-contain {
    width: 100%;
    height: 100%;
    object-fit: contain;
    font-family: 'object-fit: contain;';
  }
`
