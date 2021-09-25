import { lazy } from 'react'
import { nanoid } from 'nanoid'
import { RouteProperties } from '../../../types/route-properties'

const Login = lazy(() => import('pages/auth/login'))
const ForgotPassword = lazy(() => import('pages/auth/forgot-password'))
const Registration = lazy(() => import('pages/auth/registration'))

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
    component: ForgotPassword,
    exact: true,
    path: '/forgot-password',
    name: 'ForgotPassword',
  },

  {
    id: nanoid(),
    component: Registration,
    exact: true,
    path: '/registration',
    name: 'registration',
  },
]

export default routes
