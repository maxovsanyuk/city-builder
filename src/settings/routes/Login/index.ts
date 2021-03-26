import { RouteProperties } from '../types/RouteProperties'
import { Login } from 'pages/Login'
import { generate } from 'shortid'

const routes: RouteProperties[] = [
  {
    id: generate(),
    component: Login,
    exact: true,
    path: '/login',
    name: 'Login',
  },
]

export default routes
