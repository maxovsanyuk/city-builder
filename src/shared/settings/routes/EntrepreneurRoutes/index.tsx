import { lazy } from 'react'
import { nanoid } from 'nanoid'
import { RouteProperties } from '../types/RouteProperties'

const PersonalDataPage = lazy(() => import('pages/Dashboard/PersonalDataPage'))
const EntrepreneurHomePage = lazy(() => import('pages/Dashboard/Entrepreneur/EntrepreneurHomePage'))
const CreateEntrepreneurRequest = lazy(() => import('pages/Dashboard/Entrepreneur/CreateEntrepreneurRequest'))

const routes: RouteProperties[] = [
  {
    id: nanoid(),
    component: EntrepreneurHomePage,
    exact: true,
    path: '/',
    name: 'Entrepreneur',
  },

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
