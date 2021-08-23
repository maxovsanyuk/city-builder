import { DefaultTheme } from 'styled-components'

export interface ThemeType {
  fonts: Record<string, string>
  breakpoint: Record<string, number>
  color: Record<string, string>
}

const fonts = {
  arial: 'Arial, sans-serif',
  inter: 'Inter',
}

const breakpoint = {
  extraSmallMax: 374,
  extraSmallMin: 375,

  smallMax: 575,
  smallMin: 576,

  mediumMax: 767,
  mediumMin: 768,

  largeMax: 1024,
  largeMin: 1025,

  extraLargeMax: 1399,
  extraLargeMin: 1400,
}

export const defaultColors = {
  purpleDark: '#3C167E',
  purpleMedium: '#5921BA',
  purpleDefault: '#752DFB',
  purpleSemiLight: '#985BFB',
  purpleLight: '#DFC9FD',
  greyDark: '#212121',

  greenDark: '#033B22',
  greenMedium: '#0F7047',
  greenDefault: '#13B16D',
  greenSemiLight: '#25E48A',
  greenLight: '#C0F9E1',

  blueDark: '#07223F',
  blueMedium: '#11427E',
  blueDefault: '#2585FB',
  blueLight: '#C8E0FE',

  black: '#000',
  blackLight: 'rgba(0, 0, 0, 0.5)',
  blackMiddle: 'rgba(0, 0, 0, 0.8)',
  white: '#fff',
  whiteMiddle: '#f2f2f2',
  whiteMain: 'rgb(242, 244, 245)',
  transparent: 'transparent',

  greySemiDark: '#494C4E',
  greyMedium: '#A1A3A5',
  greyLight: '#F7FAFB',
  greyTransparent: 'rgba(212, 222, 227, 0.7);',

  red: '#ED462F',

  yellow: '#FEC62E',
  formValid: '#19AC68',
}

// TODO: need to refactor themes

const lightThemeColors = {
  ...defaultColors,
  blackMiddle: '#ccc',
}

const DarkTheme: DefaultTheme = {
  fonts,
  breakpoint,
  color: defaultColors,
}

const LigthTheme: DefaultTheme = {
  fonts,
  breakpoint,
  color: lightThemeColors,
}

const Theme = {
  dark: DarkTheme,
  light: LigthTheme,
}

const mq = (minWidth: number, type = 'min'): string => `@media (${type}-width: ${minWidth}px)`

export { Theme, mq }
