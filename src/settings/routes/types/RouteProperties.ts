import React from 'react'
import { IMenuItem } from 'components/Common/Menu'

export interface RouteProperties {
  id: string
  component: React.FC
  exact?: boolean
  params?: {
    [key: string]: string
  }
  path: string
  name: string
  layout?: {
    items: IMenuItem[]
  }
}
