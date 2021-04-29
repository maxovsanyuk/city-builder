import { FC } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NotFound from 'pages/404'
import AuthorizationsRoutes from './Authorizations'
import AccountsRoutes from './Accounts'
import ModificationsRoutes from './Modifications'

interface AuthorizationsProps {}
const Authorizations: FC<AuthorizationsProps> = () => (
  <Switch>
    <Route path="/manage-authorizations/authorizations">
      <AuthorizationsRoutes />
    </Route>
    <Route path="/manage-authorizations/accounts">
      <AccountsRoutes />
    </Route>
    <Route path="/manage-authorizations/modifications">
      <ModificationsRoutes />
    </Route>

    <Route path="/manage-authorizations" exact>
      <Redirect to="/manage-authorizations/authorizations" />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
)

export default Authorizations
