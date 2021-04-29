import { FC } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NotFound from 'pages/404'
import NewAuthorization from './NewAuthorization'
import Authorization from './Authorization'
import Modifications from './Modifications'
import NewRelation from './NewRelation'
import Accounts from './Accounts'
import Account from './Account'
import Catalog from './Catalog'
import EditAccount from './EditAccount'

interface AuthorizationsProps {}
const Authorizations: FC<AuthorizationsProps> = () => (
  <Switch>
    <Route path="/authorizations/catalog">
      <Catalog />
    </Route>
    <Route path="/authorizations/create">
      <NewAuthorization />
    </Route>
    <Route path="/authorizations/accounts/new-relation/:id/">
      <NewRelation />
    </Route>

    <Route exact path="/authorizations/accounts/edit/:id">
      <EditAccount />
    </Route>
    <Route
      exact
      path="/authorizations/accounts/:id"
      render={props => <Account {...props} id={props.match.params.id} />}
    />
    <Route exact path="/authorizations/accounts">
      <Accounts />
    </Route>

    <Route path="/authorizations/modifications">
      <Modifications />
    </Route>
    <Route
      path="/authorizations/:id"
      render={routeProps => <Authorization {...routeProps} id={routeProps.match.params.id} />}
    />
    <Route path="/authorizations" exact>
      <Redirect to="/authorizations/catalog" />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
)

export default Authorizations
