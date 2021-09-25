import { lazy } from 'react'
import { nanoid } from 'nanoid'
import { RouteProperties } from '../../../types/route-properties'

const PersonalDataPage = lazy(() => import('pages/dashboard/personal-data'))
const CreateEntrepreneurRequest = lazy(() => import('pages/dashboard/entrepreneur/create-entrepreneur-request'))

const routes: RouteProperties[] = [
  {
    id: nanoid(),
    component: PersonalDataPage,
    exact: true,
    path: '/personal-data',
    name: 'Personal data',
  },

  {
    id: nanoid(),
    component: CreateEntrepreneurRequest,
    exact: true,
    path: '/create-reques',
    name: 'Entrepreneurs reques',
  },
]

export default routes
