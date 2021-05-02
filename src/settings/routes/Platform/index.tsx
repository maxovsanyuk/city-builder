import Home from 'pages/Home'
// import { DefaultLayout, AuthorizationsLayout } from 'settings/layouts'
import { RouteProperties } from '../types/RouteProperties'

const routes: RouteProperties[] = [
  {
    id: 'home',
    component: Home,
    exact: true,
    path: '/',
    name: 'Home',
  },
]

export default routes
