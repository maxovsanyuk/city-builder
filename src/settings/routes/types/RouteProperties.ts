import { FC } from 'react'
import { IMenuItem } from 'components/Common/Menu'

export interface RouteProperties {
  id: string
  component: FC
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
