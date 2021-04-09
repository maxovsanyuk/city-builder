import 'styled-components'
import { ThemeType } from 'components/styles/variables'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
