import AuthLayout from './pages/templates/AuthLayout'
import DashboardLayout from './pages/templates/DashboardLayout'
import { FC, Suspense } from 'react'
import { NotFound } from './pages/404'
import { useStore } from 'effector-react'
import { Loading } from './shared/ui/molecules'
import { ThemeProvider } from 'styled-components'
import { $user } from './processes/auth/login-model'
import { history } from './shared/services/navigation'
import { Router, Route, Switch } from 'react-router-dom'
import { GlobalStyle, Theme } from 'shared/settings/theme'
import { $theme } from './shared/model/ThemeSwitcher/model'
import { LoginRoutes, AdminRoutes, CitizenRoutes, EntrepreneurRoutes, HomeRoutes } from 'shared/settings/routes'

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

          <NotFound />
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

          <NotFound />
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

          <NotFound />
        </Switch>
      )

    default:
      return null
  }
}

const App: FC = () => {
  const user = useStore($user)
  const theme = useStore($theme)

  return (
    // @ts-ignore
    <ThemeProvider theme={Theme[theme]}>
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

          <NotFound />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
