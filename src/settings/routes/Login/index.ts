import { RouteProperties } from '../types/RouteProperties'
import { Login } from 'pages/Login'
import { nanoid } from 'nanoid'

const routes: RouteProperties[] = [
  {
    id: nanoid(),
    component: Login,
    exact: true,
    path: '/login',
    name: 'Login',
  },
]

export default routes
