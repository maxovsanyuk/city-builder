import * as ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { IntlProvider } from './shared/settings/intlProvider'
import { initLogger } from './shared/services/effector-logger'

ReactDOM.render(
  <IntlProvider>
    <App />
  </IntlProvider>,
  document.getElementById('root')
)

registerServiceWorker()
initLogger()
