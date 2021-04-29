import { FC, useState, useMemo, ChangeEvent } from 'react'
import styled from 'styled-components'
import Card from 'procredit-bank-design-system/modules/card'
import Input from 'procredit-bank-design-system/modules/input'
import Icons from 'procredit-bank-design-system/modules/icons'
import ModificationsTable from './ModificationsTable'
import { useModifications } from '../mockData'

const { SearchOutlined } = Icons

const StyledCard = styled(Card)`
  & .ant-card-body {
    padding-left: 0;
    padding-right: 0;
    overflow: hidden;
    & .ant-table-wrapper {
      padding-left: 15px;
      padding-right: 15px;
      overflow: auto;
    }
  }
`

interface ModificationsProps {
  selectedRowKeys: number[]
  onSelectChange: (keys: number[]) => void
}
const Modifications: FC<ModificationsProps> = ({ selectedRowKeys, onSelectChange }) => {
  const [search, setSearch] = useState('')

  const { data, loading } = useModifications()
  const relatedModifications = useMemo(
    () => data?.filter(modification => modification.status.includes('Pending')) || [],
    [data]
  )

  const filteredData = useMemo(() => {
    if (!search) return relatedModifications
    if (!relatedModifications) return relatedModifications
    const lowercaseSearch = search.toLowerCase()
    return relatedModifications.filter(
      modification =>
        (modification.name || '').toLowerCase().includes(lowercaseSearch) ||
        (modification.accountNumber || '').toLowerCase().includes(lowercaseSearch)
    )
  }, [relatedModifications, search])

  return (
    <StyledCard
      title="Modifications"
      extra={
        <Input
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          prefix={<SearchOutlined />}
          placeholder="Search"
        />
      }
    >
      <ModificationsTable
        data={filteredData}
        loading={loading}
        rowSelection={{ selectedRowKeys, onChange: onSelectChange }}
      />
    </StyledCard>
  )
}

export default Modifications
