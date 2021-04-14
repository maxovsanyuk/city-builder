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

// Default layout
export const DefaultItems: IMenuItem[] = [
  { key: 'home', title: 'Home', href: '/', icon: <HomeOutlined />, type: 'item' },
  {
    key: 'transaction',
    title: 'Financial transaction',
    href: '/transactions',
    icon: <PieChartOutlined />,
    type: 'item',
  },
  {
    key: 'authorizations',
    title: 'Managing authorizations',
    href: '/authorizations',
    icon: <TeamOutlined />,
    type: 'item',
  },
  { key: 'documents', title: 'Managing documents', href: '/documents', icon: <FileTextOutlined />, type: 'item' },
  {
    key: 'pos-terminals',
    title: 'Managing POS terminals',
    href: '/pos-terminals',
    icon: <WalletOutlined />,
    type: 'item',
  },
  {
    key: 'document-signing',
    title: 'Documents signing',
    href: '/document-signing',
    icon: <AuditOutlined />,
    type: 'item',
  },
  {
    key: 'business-cards',
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
    title: 'Managing authorizations',
    type: 'group',
    items: [
      {
        key: 'catalog',
        title: 'Authorizations',
        href: '/authorizations/catalog',
        icon: <TeamOutlined />,
        type: 'item',
      },
      {
        key: 'accounts',
        title: 'Accounts',
        href: '/authorizations/accounts',
        icon: <CreditCardOutlined />,
        type: 'item',
      },
      {
        key: 'modifications',
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
