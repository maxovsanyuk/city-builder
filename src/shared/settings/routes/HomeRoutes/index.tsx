import { lazy } from 'react'
import { nanoid } from 'nanoid'
import { RouteProperties } from '../types/RouteProperties'

const HomePage = lazy(() => import('pages/HomePage'))
const CountryCategoryPage = lazy(() => import('pages/CountryCategoryPage'))
const AdvertisementPage = lazy(() => import('pages/AdvertisementPages/Advertisement'))
const LocationCategoriesPage = lazy(() => import('pages/LacationPages/LocationCategoriesPage'))
const LocationCategoryPage = lazy(() => import('pages/LacationPages/LocationCategoryPage'))
const CountryCategoryPageCitizenRequests = lazy(() => import('pages/CitizenPages/CountryCategoryCitizenRequests'))
const CountryCategoryPageEntrepreneurRequests = lazy(
  () => import('pages/EntrepreneurPages/CountryCategoryEntrepreneurRequests')
)
const LocationCategoryPageCitizenRequests = lazy(
  () => import('pages/LacationPages/LocationCategoryPageCitizenRequests')
)
const LocationCategoryPageEntrepreneurRequests = lazy(
  () => import('pages/LacationPages/LocationCategoryPageEntrepreneurRequests')
)
const CountryCategoryAdvertisementPage = lazy(() => import('pages/AdvertisementPages/CountryCategoryAdvertisement'))
const CountryLocationAdvertisementContent = lazy(() => import('pages/AdvertisementPages/CountryLocationAdvertisement'))
const CountryCategoryLocationAdvertisement = lazy(
  () => import('pages/AdvertisementPages/CountryCategoryLocationAdvertisement')
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
    component: CountryCategoryPageEntrepreneurRequests,
    exact: true,
    path: '/country/category/:categoryId/entrepreneur-requests',
    name: 'Country category page entrepreneurs requests',
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

  {
    id: nanoid(),
    component: CountryCategoryAdvertisementPage,
    exact: true,
    path: '/country/category/:categoryId/advertisement/:advertisementId',
    name: 'Country category advertisement',
  },

  {
    id: nanoid(),
    component: CountryLocationAdvertisementContent,
    exact: true,
    path: '/country/location/:locationId/advertisement/:advertisementId',
    name: 'Country location advertisement',
  },

  {
    id: nanoid(),
    component: CountryCategoryLocationAdvertisement,
    exact: true,
    path: '/country/category/:categoryId/location/:locationId/advertisement/:advertisementId',
    name: 'Country category location advertisement',
  },
]

export default routes
