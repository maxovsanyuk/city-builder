import 'styled-components'
import { ThemeType } from 'settings/theme/styles/variables'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
