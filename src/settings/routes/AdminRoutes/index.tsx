import { lazy } from 'react'
import { nanoid } from 'nanoid'
import { RouteProperties } from '../types/RouteProperties'

const AdminHomePage = lazy(() => import('pages/Dashboard/Admin/AdminHomePage'))
const PersonalDataPage = lazy(() => import('pages/Dashboard/PersonalDataPage'))

const routes: RouteProperties[] = [
  {
    id: nanoid(),
    component: AdminHomePage,
    exact: true,
    path: '/',
    name: 'Admin',
  },

  {
    id: nanoid(),
    component: PersonalDataPage,
    exact: true,
    path: '/personal-data',
    name: 'Personal data',
  },
]

export default routes
