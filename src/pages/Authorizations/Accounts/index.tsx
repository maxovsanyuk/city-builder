import { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from 'pages/404'

import EditAccount from './EditAccount'
import NewRelation from './NewRelation'
import Account from './Account'
import Catalog from './Catalog'

const AccountsRoutes: FC = () => (
  <Switch>
    <Route path="/manage-authorizations/accounts/edit/:id">
      <EditAccount />
    </Route>
    <Route path="/manage-authorizations/accounts/new-relation/:id">
      <NewRelation />
    </Route>
    <Route
      path="/manage-authorizations/accounts/:id"
      render={props => <Account {...props} id={props.match.params.id} />}
    />
    <Route path="/manage-authorizations/accounts">
      <Catalog />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
)

export default AccountsRoutes
