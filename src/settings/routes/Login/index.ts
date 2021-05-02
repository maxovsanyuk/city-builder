import { RouteProperties } from '../types/RouteProperties'
import { nanoid } from 'nanoid'
import { Login } from 'pages/Login'

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
