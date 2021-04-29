import { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from 'pages/404'

import NewAuthorization from './NewAuthorization'
import Authorization from './Authorization'
import Catalog from './Catalog'

const AuthorizationsRoutes: FC = () => (
  <Switch>
    <Route path="/manage-authorizations/authorizations/create">
      <NewAuthorization />
    </Route>
    <Route
      path="/manage-authorizations/authorizations/:id"
      render={routeProps => <Authorization {...routeProps} id={routeProps.match.params.id} />}
    />
    <Route path="/manage-authorizations/authorizations">
      <Catalog />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
)

export default AuthorizationsRoutes
