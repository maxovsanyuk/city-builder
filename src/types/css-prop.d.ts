import { CSSProp, DefaultTheme } from 'styled-components'

declare module 'react' {
  interface Attributes {
    css?: CSSProp<DefaultTheme>
  }
}
