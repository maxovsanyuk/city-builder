import { RouteProperties } from '../types/RouteProperties'
import { Platform } from 'pages/Platform'
import { generate } from 'shortid'

const routes: RouteProperties[] = [
  {
    id: generate(),
    component: Platform,
    exact: true,
    path: '/',
    name: 'Platform',
  },
]

export default routes
