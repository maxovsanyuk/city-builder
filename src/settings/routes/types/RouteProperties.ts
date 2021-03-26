import React from 'react'

export interface RouteProperties {
  id: string
  component: React.FC
  exact?: boolean
  params?: {
    [key: string]: string
  }
  path: string
  name: string
}
