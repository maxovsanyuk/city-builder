import { FC } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { AuthLayout, PlatformLayout } from 'containers/index'
import { LoginRoutes, PlatformRoutes } from 'settings/routes'
import { GlobalStyle, Theme } from 'components'
import { history } from 'store/configureStore'
import { Sprite } from 'components/Common'
import NotFound from 'pages/404'
import React from 'react'

const App: FC = () => {
  const { user } = useSelector(({ auth }) => auth)

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Sprite />
      <Router history={history}>
        {user?.token ? (
          <Switch>
            {PlatformRoutes.map(({ component: Component, ...elem }) => (
              <Route
                key={elem.id}
                {...elem}
                render={() => (
                  <PlatformLayout items={elem?.layout?.items || []}>
                    <Component />
                  </PlatformLayout>
                )}
              />
            ))}
            <Route path="/login">
              <Redirect to="/" />
            </Route>
            <Route path="*">
              <PlatformLayout>
                <NotFound />
              </PlatformLayout>
            </Route>
          </Switch>
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
