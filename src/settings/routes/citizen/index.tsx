import { lazy } from 'react'
import { nanoid } from 'nanoid'
import { RouteProperties } from '../../../types/route-properties'

const PersonalDataPage = lazy(() => import('pages/dashboard/personal-data'))
const CreateCitizenRequest = lazy(() => import('pages/dashboard/citizen/create-citizen-request'))

const routes: RouteProperties[] = [
  {
    id: nanoid(),
    component: PersonalDataPage,
    exact: true,
    path: '/city-builder/personal-data',
    name: 'Citizen data',
  },

  {
    id: nanoid(),
    component: CreateCitizenRequest,
    exact: true,
    path: '/city-builder/create-reques',
    name: 'Citizen reques',
  },
]

export default routes
