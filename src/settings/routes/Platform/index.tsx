import { RouteProperties } from '../types/RouteProperties'
import { Platform } from 'pages/Platform'
import { nanoid } from 'nanoid'

const routes: RouteProperties[] = [
  {
    id: nanoid(),
    component: Platform,
    exact: true,
    path: '/',
    name: 'Platform',
  },
]

export default routes
