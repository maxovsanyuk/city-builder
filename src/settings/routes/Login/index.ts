import { Login } from 'pages/Login'
import { RouteProperties } from '../types/RouteProperties'

const routes: RouteProperties[] = [
  {
    id: 'login',
    component: Login,
    exact: true,
    path: '/login',
    name: 'Login',
  },
]

export default routes
