import { Route } from 'react-router-dom'
import NotFound from 'pages/404'
import AuthLayout from '../../../../../pages/templates/AuthLayout'

const NotFoundRoutes: any = () => {
  return ['/404', '*'].map((path: string) => (
    <Route path={path} key={path}>
      <AuthLayout>
        <NotFound />
      </AuthLayout>
    </Route>
  ))
}

export default NotFoundRoutes
