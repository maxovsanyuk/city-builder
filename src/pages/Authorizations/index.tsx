import React, { FC } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NotFound from 'pages/404'
import NewAuthorization from './NewAuthorization'
import Modifications from './Modifications'
import Accounts from './Accounts'
import Catalog from './Catalog'


interface AuthorizationsProps {}
const Authorizations: FC<AuthorizationsProps> = () => (
  <Switch>
    <Route path="/authorizations/catalog">
      <Catalog />
    </Route>
    <Route path="/authorizations/create">
      <NewAuthorization />
    </Route>
    <Route path="/authorizations/accounts">
      <Accounts />
    </Route>
    <Route path="/authorizations/modifications">
      <Modifications />
    </Route>
    <Route path="/authorizations" exact>
      <Redirect to="/authorizations/catalog" />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
)

export default Authorizations
