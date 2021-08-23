import AuthLayout from './pages/templates/AuthLayout'
import Loading from './features/Common/ui/molecules/Loading'
import DashboardLayout from './pages/templates/DashboardLayout'
import NotFoundRoutes from './features/Common/ui/molecules/NotFoundRoutes'
import { FC, Suspense } from 'react'
import { useStore } from 'effector-react'
import { $user } from './pages/Auth/Login/model'
import { ThemeProvider } from 'styled-components'
import { history } from './shared/services/navigation'
import { Router, Route, Switch } from 'react-router-dom'
import { GlobalStyle, Theme } from 'shared/settings/theme'
import { $theme } from './features/Common/model/ThemeSwitcher/model'
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

          <NotFoundRoutes />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
