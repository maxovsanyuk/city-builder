import Home from 'pages/Home'
import Documents from 'pages/Documents'
import Transactions from 'pages/Transactions'
import PosTerminals from 'pages/PosTerminals'
import BusinessCards from 'pages/BusinessCards'
import Authorizations from 'pages/Authorizations'
import DocumentSignings from 'pages/DocumentSignings'
import { DefaultLayout, AuthorizationsLayout } from 'settings/layouts'
import { RouteProperties } from '../types/RouteProperties'

const routes: RouteProperties[] = [
  {
    id: 'home',
    component: Home,
    exact: true,
    path: '/',
    name: 'Home',
    layout: DefaultLayout,
  },
  {
    id: 'transactions',
    component: Transactions,
    path: '/transactions',
    name: 'Managing transactions',
    layout: DefaultLayout,
  },
  {
    id: 'authorizations',
    component: Authorizations,
    path: '/manage-authorizations',
    name: 'Managing authorizations',
    layout: AuthorizationsLayout,
  },
  {
    id: 'documents',
    component: Documents,
    path: '/documents',
    name: 'Managing documents',
    layout: DefaultLayout,
  },
  {
    id: 'pos-terminals',
    component: PosTerminals,
    path: '/pos-terminals',
    name: 'Managing POS terminals',
    layout: DefaultLayout,
  },
  {
    id: 'document-signing',
    component: DocumentSignings,
    path: '/document-signing',
    name: 'Documents Signings',
    layout: DefaultLayout,
  },
  {
    id: 'business-cards',
    component: BusinessCards,
    path: '/business-cards',
    name: 'Managing Business Cards',
    layout: DefaultLayout,
  },
]

export default routes
