import { lazy } from 'react'
import { nanoid } from 'nanoid'
import { RouteProperties } from '../types/RouteProperties'

const HomePage = lazy(() => import('pages/HomePage'))
const CountryCategoryPage = lazy(() => import('pages/CountryCategoryPage'))
const AdvertisementPage = lazy(() => import('pages/AdvertisementPage'))
const LocationCategoriesPage = lazy(() => import('pages/LacationPages/LocationCategoriesPage'))
const LocationCategoryPage = lazy(() => import('pages/LacationPages/LocationCategoryPage'))
const CountryCategoryPageCitizenRequests = lazy(() => import('pages/CitizenPages/CountryCategoryPageCitizenRequests'))
const CountryCategoryPageEntrepreneurRequests = lazy(
  () => import('pages/EntrepreneurPages/CountryCategoryPageEntrepreneurRequests')
)
const CategoryPageTopCitizenRequests = lazy(() => import('pages/CitizenPages/CategoryPageTopCitizenRequests'))
const CategoryPageTopEntrepreneurRequests = lazy(
  () => import('pages/EntrepreneurPages/CategoryPageTopEntrepreneurRequests')
)
const LocationCategoryPageCitizenRequests = lazy(
  () => import('pages/LacationPages/LocationCategoryPageCitizenRequests')
)
const LocationCategoryPageEntrepreneurRequests = lazy(
  () => import('pages/LacationPages/LocationCategoryPageEntrepreneurRequests')
)

const routes: RouteProperties[] = [
  {
    id: nanoid(),
    component: HomePage,
    exact: true,
    path: '/',
    name: 'Home',
  },

  {
    id: nanoid(),
    component: CountryCategoryPage,
    exact: true,
    path: '/country/category/:categoryId',
    name: 'Country category page',
  },

  {
    id: nanoid(),
    component: CountryCategoryPageCitizenRequests,
    exact: true,
    path: '/country/category/:categoryId/citizen-requests',
    name: 'Country category page citizen requests',
  },

  {
    id: nanoid(),
    component: CategoryPageTopCitizenRequests,
    exact: true,
    path: '/category/:categoryId/top-citizen-requests',
    name: 'Country category page top citizen requests',
  },

  {
    id: nanoid(),
    component: CategoryPageTopEntrepreneurRequests,
    exact: true,
    path: '/category/:categoryId/top-entrepreneur-requests',
    name: 'Country category page top entrepreneur requests',
  },

  {
    id: nanoid(),
    component: CountryCategoryPageEntrepreneurRequests,
    exact: true,
    path: '/country/category/:categoryId/entrepreneur-requests',
    name: 'Country category page entrepreneur requests',
  },

  {
    id: nanoid(),
    component: AdvertisementPage,
    exact: true,
    path: '/advertisement/:advertisementId',
    name: 'Advertisement',
  },

  {
    id: nanoid(),
    component: LocationCategoriesPage,
    exact: true,
    path: '/location/:locationId',
    name: 'Location',
  },

  {
    id: nanoid(),
    component: LocationCategoryPage,
    exact: true,
    path: '/location/:locationId/category/:categoryId',
    name: 'Location category',
  },

  {
    id: nanoid(),
    component: LocationCategoryPageCitizenRequests,
    exact: true,
    path: '/location/:locationId/category/:categoryId/citizen-requests/',
    name: 'Location category',
  },

  {
    id: nanoid(),
    component: LocationCategoryPageEntrepreneurRequests,
    exact: true,
    path: '/location/:locationId/category/:categoryId/entrepreneur-requests/',
    name: 'Location category',
  },
]

export default routes
