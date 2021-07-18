import { FC, Suspense } from 'react'
import { history } from 'store/configureStore'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Router, Route, Switch } from 'react-router-dom'
import { AuthLayout, DashboardLayout } from 'containers/index'
import { LoginRoutes, AdminRoutes, CitizenRoutes, EntrepreneurRoutes, HomeRoutes } from 'settings/routes'
import { GlobalStyle, Theme } from 'components'
import NotFoundRoutes from './components/Common/NotFoundRoutes'
import Loading from './components/Loading'

const UserRoutes: any = ({ authorizationType }: Record<string, any>) => {
  switch (authorizationType.toLowerCase()) {
    case 'admin':
      return (
        <Switch>
          {AdminRoutes.map(({ component: Component, ...elem }) => (
            <Route
              key={elem.id}
              {...elem}
              render={() => (
                <DashboardLayout>
                  <Suspense fallback={<Loading />}>
                    <Component />
                  </Suspense>
                </DashboardLayout>
              )}
            />
          ))}

          <NotFoundRoutes />
        </Switch>
      )

    case 'entrepreneur':
      return (
        <Switch>
          {EntrepreneurRoutes.map(({ component: Component, ...elem }) => (
            <Route
              key={elem.id}
              {...elem}
              render={() => (
                <DashboardLayout>
                  <Suspense fallback={<Loading />}>
                    <Component />
                  </Suspense>
                </DashboardLayout>
              )}
            />
          ))}

          <NotFoundRoutes />
        </Switch>
      )

    case 'citizen':
      return (
        <Switch>
          {CitizenRoutes.map(({ component: Component, ...elem }) => (
            <Route
              key={elem.id}
              {...elem}
              render={() => (
                <DashboardLayout>
                  <Suspense fallback={<Loading />}>
                    <Component />
                  </Suspense>
                </DashboardLayout>
              )}
            />
          ))}

          <NotFoundRoutes />
        </Switch>
      )

    default:
      return null
  }
}

const App: FC = () => {
  const { user } = useSelector(({ auth }: any) => auth)

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          {HomeRoutes.map(({ component: Component, ...elem }) => (
            <Route
              key={elem.id}
              {...elem}
              render={() => (
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              )}
            />
          ))}

          {user?.token ? (
            <UserRoutes authorizationType={user?.authorizationType} />
          ) : (
            LoginRoutes.map(({ component: Component, ...elem }) => (
              <Route
                key={elem.id}
                {...elem}
                render={() => (
                  <Suspense fallback={<Loading />}>
                    <AuthLayout>
                      <Component />
                    </AuthLayout>
                  </Suspense>
                )}
              />
            ))
          )}

          <NotFoundRoutes />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
