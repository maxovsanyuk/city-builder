import { Route } from 'react-router-dom'
import { AuthLayout } from '../../../containers'
import NotFound from 'pages/404'

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
