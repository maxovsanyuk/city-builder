import { DefaultTheme } from 'styled-components'

interface FontStyle {
  fontSize: Record<string, string>
  lineHeight: Record<string, string>
}

export interface ThemeType {
  fonts: Record<string, any>
  fontStyle: Record<string, FontStyle | Record<string, number | string>>

  colors: {
    dark: string
    black: string
    greyLight: string
    greySemiLight: string
    grey: string
    greySemiDark: string
    greyDark: string

    white: string
    red: string
    green: string
    yellow: string

    greyExtraDark: string
    greenLight: string
    greenSemiLight: string
  }
  labels: {
    briefing: string
    needInformation: string
    inProgress: string
    done: string
    reject: string
    profile: string
    connection: string
    payment: string
    openCabinet: string
    other: string
  }
  breakpoint: {
    mediumMax: number
    mediumMin: number
    largeMax: number
    largeMin: number
    extraLargeMax: number
    extraLargeMin: number
  }
}

const fonts = {
  arial: 'Arial, sans-serif',
  inter: 'Inter',
}

const fontStyle = {
  desktop: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '24px',
      hd: '32px',
    },

    lineHeight: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '24px',
      hd: '32px',
    },
  },
  tablet: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      hd: '22px',
    },

    lineHeight: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      hd: '22px',
    },
  },

  mobile: {
    fontSize: {
      xs: '8px',
      sm: '10px',
      md: '12px',
      lg: '16px',
      hd: '20px',
    },

    lineHeight: {
      xs: '8px',
      sm: '10px',
      md: '12px',
      lg: '16px',
      hd: '20px',
    },
  },

  weight: {
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
}

const colors = {
  // basic colors
  dark: '#000',
  black: '#181A1A',
  greyLight: '#F5F5F5',
  greySemiLight: '#E8E8E8',
  grey: '#D0CFCF',
  greySemiDark: '#757575',
  greyDark: '#585858',
  greyExtraDark: '#2B2F2F',

  // secondary colors
  red: '#FF5C52',
  green: '#A8FF38',
  yellow: '#EFFD37',
  white: '#fff',

  greenLight: '#EDFF00',
  greenSemiLight: '#F5FF74',
}

const labels = {
  briefing: '#D5E3FF',
  needInformation: '#D0F9FF',
  inProgress: '#C2FFFB',
  done: '#D9FFC2',
  reject: '#E7D5FF',
  profile: '#2BBAE8',
  connection: '#FFD5EE',
  payment: '#FFDCCE',
  openCabinet: '#FFF9C2',
  other: '#AEACAC',
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
  fontStyle,
  colors,
  labels,
  breakpoint,
}

const mq = (minWidth: number, type = 'min'): string => `@media (${type}-width: ${minWidth}px)`

export { colors, Theme, mq }
