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
