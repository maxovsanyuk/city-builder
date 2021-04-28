import { RouteProperties } from '../types/RouteProperties'
import { nanoid } from 'nanoid'

// PAGES

import { Login } from 'pages/Login'
import { ConfirmLogin } from 'pages/ConfirmLogin'

const routes: RouteProperties[] = [
  {
    id: nanoid(),
    component: Login,
    exact: true,
    path: '/login',
    name: 'Login',
  },

  {
    id: nanoid(),
    component: ConfirmLogin,
    exact: true,
    path: '/confirm-login',
    name: 'ConfirmLogin',
  },
]

export default routes
