import AuthLayout from './pages/templates/auth-layout'
import DashboardLayout from './pages/templates/dashboard-layout'
import { FC, Suspense } from 'react'
import { NotFound } from './pages/404'
import { useStore } from 'effector-react'
import { Loading } from './shared/ui/molecules'
import { history } from './services/navigation'
import { $user } from './processes/auth/login-model'
import { Router, Route, Switch } from 'react-router-dom'
import { $theme } from './shared/model/theme-switcher/model'
import { LoginRoutes, AdminRoutes, CitizenRoutes, EntrepreneurRoutes, HomeRoutes } from 'settings/routes'

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

  return (
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
  )
}

export default App
