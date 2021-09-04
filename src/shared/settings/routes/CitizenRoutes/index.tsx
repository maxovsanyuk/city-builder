import { lazy } from 'react'
import { nanoid } from 'nanoid'
import { RouteProperties } from '../types/RouteProperties'

const PersonalDataPage = lazy(() => import('pages/Dashboard/PersonalDataPage'))
const CreateCitizenRequest = lazy(() => import('pages/Dashboard/Citizen/CreateCitizenRequest'))

const routes: RouteProperties[] = [
  {
    id: nanoid(),
    component: PersonalDataPage,
    exact: true,
    path: '/personal-data',
    name: 'Citizen data',
  },

  {
    id: nanoid(),
    component: CreateCitizenRequest,
    exact: true,
    path: '/create-reques',
    name: 'Citizen reques',
  },
]

export default routes
