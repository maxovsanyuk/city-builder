import { lazy } from 'react'
import { nanoid } from 'nanoid'
import { RouteProperties } from '../types/RouteProperties'

const PersonalDataPage = lazy(() => import('pages/Dashboard/PersonalDataPage'))

const routes: RouteProperties[] = [
  {
    id: nanoid(),
    component: PersonalDataPage,
    exact: true,
    path: '/personal-data',
    name: 'Personal data',
  },
]

export default routes
