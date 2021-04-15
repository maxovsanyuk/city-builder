import * as React from 'react'
import { nanoid } from 'nanoid'
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

// Default layout
export const DefaultItems: IMenuItem[] = [
  { id: nanoid(), title: 'Home', href: '/', icon: <HomeOutlined />, type: 'item' },
  {
    id: nanoid(),
    title: 'Financial transaction',
    href: '/transactions',
    icon: <PieChartOutlined />,
    type: 'item',
  },
  {
    id: nanoid(),
    title: 'Managing authorizations',
    href: '/authorizations',
    icon: <TeamOutlined />,
    type: 'item',
  },
  { id: nanoid(), title: 'Managing documents', href: '/documents', icon: <FileTextOutlined />, type: 'item' },
  {
    id: nanoid(),
    title: 'Managing POS terminals',
    href: '/pos-terminals',
    icon: <WalletOutlined />,
    type: 'item',
  },
  {
    id: nanoid(),
    title: 'Documents signing',
    href: '/document-signing',
    icon: <AuditOutlined />,
    type: 'item',
  },
  {
    id: nanoid(),
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
    id: nanoid(),
    title: 'Managing authorizations',
    type: 'group',
    items: [
      {
        id: nanoid(),
        title: 'Authorizations',
        href: '/authorizations/catalog',
        icon: <TeamOutlined />,
        type: 'item',
      },
      {
        id: nanoid(),
        title: 'Accounts',
        href: '/authorizations/accounts',
        icon: <CreditCardOutlined />,
        type: 'item',
      },
      {
        id: nanoid(),
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
