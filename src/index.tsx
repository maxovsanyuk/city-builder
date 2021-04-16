import React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from 'store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import Loading from 'components/Loading'
import App from './App'
import { IntlProvider } from './hoc'

const { persistor, store } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <App />
      </PersistGate>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
