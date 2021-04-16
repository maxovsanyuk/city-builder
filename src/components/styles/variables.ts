import { DefaultTheme } from 'styled-components'

export interface ThemeType {
  fonts: Record<string, string>
  breakpoint: Record<string, number>
  colors: Record<string, string>
}

const fonts = {
  arial: 'Arial, sans-serif',
  inter: 'Inter',
}

const colors = {
  // basic colors
  dark: '#000',
  black: '#181A1A',
  white: '#fff',
}

const breakpoint = {
  mediumMax: 991,
  mediumMin: 992,
  largeMax: 1199,
  largeMin: 1200,
  extraLargeMax: 1399,
  extraLargeMin: 1400,
}

const Theme: DefaultTheme = {
  fonts,
  colors,
  breakpoint,
}

const mq = (minWidth: number, type = 'min'): string => `@media (${type}-width: ${minWidth}px)`

export { Theme, colors, mq }

// const colors = {
//   // basic colors
//   dark: '#000',
//   black: '#181A1A',
//   greyLight: '#F5F5F5',
//   greySemiLight: '#E8E8E8',
//   grey: '#D0CFCF',
//   greySemiDark: '#757575',
//   greyDark: '#585858',
//   greyExtraDark: '#2B2F2F',
//
//   // secondary colors
//   red: '#FF5C52',
//   green: '#A8FF38',
//   yellow: '#EFFD37',
//   white: '#fff',
//
//   greenLight: '#EDFF00',
//   greenSemiLight: '#F5FF74',
// }
//
// const labels = {
//   briefing: '#D5E3FF',
//   needInformation: '#D0F9FF',
//   inProgress: '#C2FFFB',
//   done: '#D9FFC2',
//   reject: '#E7D5FF',
//   profile: '#2BBAE8',
//   connection: '#FFD5EE',
//   payment: '#FFDCCE',
//   openCabinet: '#FFF9C2',
//   other: '#AEACAC',
// }
