import 'styled-components'
import { ThemeType } from 'shared/settings/theme/styles/variables'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
