import { FC, Suspense } from 'react'
import { NotFound } from './pages/404'
import { useStore } from 'effector-react'
import { Loading } from 'shared/ui/molecules'
import { $user } from './processes/auth/login-model'
import { history } from 'shared/lib/utils/navigation'
import { AuthLayout, DashboardLayout } from 'shared/ui/templates'
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import { AuthRoutes, AdminRoutes, CitizenRoutes, EntrepreneurRoutes, HomeRoutes } from 'settings/routes'

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

export const App: FC = () => {
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

        <Route exact path="/">
          <Redirect to="/city-builder" />
        </Route>

        {user?.token ? (
          <UserRoutes authorizationType={user?.authorizationType} />
        ) : (
          AuthRoutes.map(({ component: Component, ...elem }) => (
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
