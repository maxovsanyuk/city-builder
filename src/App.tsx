import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AuthLayout, PlatformLayout } from 'containers/index'
import { Sprite } from 'components/Common'
import { GlobalStyle, Theme } from 'components'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { history } from 'store/configureStore'
import { LoginRoutes, PlatformRoutes } from 'settings/routes'
import { useSelector } from 'react-redux'

const App = () => {
  const { user } = useSelector(({ auth }) => auth)

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Sprite />
      <Router history={history}>
        {user?.token ? (
          <PlatformLayout>
            <Switch>
              {PlatformRoutes.map(elem => (
                <Route key={elem.id} {...elem} />
              ))}
              <Redirect to="/" />
            </Switch>
          </PlatformLayout>
        ) : (
          <AuthLayout>
            <Switch>
              {LoginRoutes.map(elem => (
                <Route key={elem.id} {...elem} />
              ))}
              <Redirect to="/login" />
            </Switch>
          </AuthLayout>
        )}
      </Router>
    </ThemeProvider>
  )
}

export default App
