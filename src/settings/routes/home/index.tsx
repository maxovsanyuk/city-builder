import { lazy } from 'react'
import { nanoid } from 'nanoid'
import { RouteProperties } from '../../../types/route-properties'

const HomePage = lazy(() => import('pages/home'))
const CountryCategoryPage = lazy(() => import('pages/country-category'))
const AdvertisementPage = lazy(() => import('pages/advertisement/advertisement'))
const LocationCategoriesPage = lazy(() => import('pages/lacation/location-categories'))
const LocationCategoryPage = lazy(() => import('pages/lacation/location-category'))
const CountryCategoryPageCitizenRequests = lazy(() => import('pages/citizen/country-category-citizen-requests'))
const CountryCategoryPageEntrepreneurRequests = lazy(
  () => import('pages/entrepreneur/country-category-entrepreneur-requests')
)
const LocationCategoryPageCitizenRequests = lazy(() => import('pages/lacation/location-category-citizen-requests'))
const LocationCategoryPageEntrepreneurRequests = lazy(
  () => import('pages/lacation/location-category-entrepreneur-requests')
)
const CountryCategoryAdvertisementPage = lazy(() => import('pages/advertisement/country-category-advertisement'))
const CountryLocationAdvertisementContent = lazy(() => import('pages/advertisement/country-location-advertisement'))
const CountryCategoryLocationAdvertisement = lazy(
  () => import('pages/advertisement/country-category-location-advertisement')
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
    path: '/advertisement-content/:advertisementId',
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
    path: '/country/category/:categoryId/advertisement-content/:advertisementId',
    name: 'Country category advertisement',
  },

  {
    id: nanoid(),
    component: CountryLocationAdvertisementContent,
    exact: true,
    path: '/country/location/:locationId/advertisement-content/:advertisementId',
    name: 'Country location advertisement',
  },

  {
    id: nanoid(),
    component: CountryCategoryLocationAdvertisement,
    exact: true,
    path: '/country/category/:categoryId/location/:locationId/advertisement-content/:advertisementId',
    name: 'Country category location advertisement',
  },
]

export default routes
