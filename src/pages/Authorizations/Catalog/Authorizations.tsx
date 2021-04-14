import * as React from 'react'
import Card from 'procredit-bank-design-system/modules/card'
import Input from 'procredit-bank-design-system/modules/input'
import Icons from 'procredit-bank-design-system/modules/icons'
import AuthorizationsTable from './AuthorizationsTable'
import TablePlaceholder from './TablePlaceholder'
import mockData, { IData } from './mockData'

const { SearchOutlined } = Icons

// TODO: Link to API
const useData = (): { data: IData[]; loading: boolean } => ({
  data: mockData,
  loading: false,
})

interface AuthorizationsProps {}
const Authorizations: React.FC<AuthorizationsProps> = () => {
  const [search, setSearch] = React.useState('')

  const { data, loading } = useData()

  const filteredData = React.useMemo(() => {
    if (!search) return data
    if (!data) return data
    return data.filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
  }, [data, search])

  return (
    <Card
      title="Authorizations"
      extra={
        <Input
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          prefix={<SearchOutlined />}
          placeholder="Search"
        />
      }
    >
      {loading ? <TablePlaceholder /> : <AuthorizationsTable data={filteredData} />}
    </Card>
  )
}

export default Authorizations
