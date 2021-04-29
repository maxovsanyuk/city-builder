import { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from 'pages/404'
import Catalog from './Catalog'

const ModificationsRoutes: FC = () => (
  <Switch>
    <Route path="/manage-authorizations/modifications">
      <Catalog />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
)

export default ModificationsRoutes
