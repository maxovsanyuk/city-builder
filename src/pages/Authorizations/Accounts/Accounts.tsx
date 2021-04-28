import { FC } from 'react'
import Card from 'procredit-bank-design-system/modules/card'
import AccountsTable from './AccountsTable'
import { useAccounts } from './mockData'

interface AccountsProps {}
const Accounts: FC<AccountsProps> = () => {
  const { accounts, loading } = useAccounts()

  return (
    <Card size="small">
      <AccountsTable data={accounts} loading={loading} />
    </Card>
  )
}

export default Accounts
