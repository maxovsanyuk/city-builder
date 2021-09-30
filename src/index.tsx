import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { App } from './App'
import { useStore } from 'effector-react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Theme } from './settings/theme'
import { IntlProvider } from './settings/intl-provider'
import { initLogger } from './services/effector-logger'
import { $theme } from './shared/model/theme-switcher/model'

const InitApp: React.FC = () => {
  const theme = useStore($theme)

  return (
    <IntlProvider>
      <ThemeProvider theme={Theme[theme]}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </IntlProvider>
  )
}

ReactDOM.render(<InitApp />, document.getElementById('root'))

registerServiceWorker()
initLogger()
