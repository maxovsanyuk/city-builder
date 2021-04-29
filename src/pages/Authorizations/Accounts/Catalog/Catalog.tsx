import { FC } from 'react'
import Card from 'procredit-bank-design-system/modules/card'
import AccountsTable from './AccountsTable'
import { useAccounts } from './mockData'

interface CatalogProps {}
const Catalog: FC<CatalogProps> = () => {
  const { accounts, loading } = useAccounts()

  return (
    <Card title="Accounts" size="small">
      <AccountsTable data={accounts} loading={loading} />
    </Card>
  )
}

export default Catalog
