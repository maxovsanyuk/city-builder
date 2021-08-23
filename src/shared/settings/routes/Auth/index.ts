import { lazy } from 'react'
import { nanoid } from 'nanoid'
import { RouteProperties } from '../types/RouteProperties'

const Login = lazy(() => import('pages/Auth/Login'))
const ForgotPassword = lazy(() => import('pages/Auth/ForgotPassword'))
const Registration = lazy(() => import('pages/Auth/Registration'))

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
