import * as React from 'react'
import Icons from 'procredit-bank-design-system/modules/icons'
import { IMenuItem } from 'components/Common/Menu'

const {
  TeamOutlined,
  CreditCardOutlined,
  UserAddOutlined,
  HomeOutlined,
  PieChartOutlined,
  FileTextOutlined,
  WalletOutlined,
  AuditOutlined,
  IdcardOutlined,
} = Icons

// * Id must match href for Sidebar to work properly
// Current location pathname is used as a 'selectedKeys'
// https://ant.design/components/menu/#Menu

// Default layout
export const DefaultItems: IMenuItem[] = [
  { id: '/', title: 'Home', href: '/', icon: <HomeOutlined />, type: 'item' },
  {
    id: '/transaction',
    title: 'Financial transaction',
    href: '/transactions',
    icon: <PieChartOutlined />,
    type: 'item',
  },
  {
    id: '/authorizations',
    title: 'Managing authorizations',
    href: '/authorizations',
    icon: <TeamOutlined />,
    type: 'item',
  },
  { id: '/documents', title: 'Managing documents', href: '/documents', icon: <FileTextOutlined />, type: 'item' },
  {
    id: '/pos-terminals',
    title: 'Managing POS terminals',
    href: '/pos-terminals',
    icon: <WalletOutlined />,
    type: 'item',
  },
  {
    id: '/document-signing',
    title: 'Documents signing',
    href: '/document-signing',
    icon: <AuditOutlined />,
    type: 'item',
  },
  {
    id: '/business-cards',
    title: 'Managing Business Cards',
    href: '/business-cards',
    icon: <IdcardOutlined />,
    type: 'item',
  },
]

export const DefaultLayout = {
  items: DefaultItems,
}

// Authorizations second-level layout
// 'authorizations / x'
export const AuthorizationsItems: IMenuItem[] = [
  {
    id: '/managing-authorizations',
    title: 'Managing authorizations',
    type: 'group',
    items: [
      {
        id: '/catalog',
        title: 'Authorizations',
        href: '/authorizations/catalog',
        icon: <TeamOutlined />,
        type: 'item',
      },
      {
        id: '/accounts',
        title: 'Accounts',
        href: '/authorizations/accounts',
        icon: <CreditCardOutlined />,
        type: 'item',
      },
      {
        id: '/modifications',
        title: 'Modifications',
        href: '/authorizations/modifications',
        icon: <UserAddOutlined />,
        type: 'item',
      },
    ],
  },
]
export const AuthorizationsLayout = {
  items: AuthorizationsItems,
}

// Add more second-level layouts here
