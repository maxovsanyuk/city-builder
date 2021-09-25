import { FC } from 'react'

export interface RouteProperties {
  id: string
  component: FC
  exact?: boolean
  params?: {
    [key: string]: string
  }
  path: string
  name: string
  layout?: any
}
