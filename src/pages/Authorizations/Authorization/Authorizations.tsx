import { FC, useState, useMemo, ChangeEvent } from 'react'
import styled from 'styled-components'
import Card from 'procredit-bank-design-system/modules/card'
import Input from 'procredit-bank-design-system/modules/input'
import Icons from 'procredit-bank-design-system/modules/icons'
import Skeleton from 'procredit-bank-design-system/modules/skeleton'
import Typography from 'procredit-bank-design-system/modules/typography'
import AuthorizationsTable from './AuthorizationsTable'
import { useAuthorizations, IUser } from '../mockData'

const { SearchOutlined } = Icons

const { Text } = Typography

const SubTitle = styled(Text)`
  font-size: 1rem;
  font-weight: 500;
  margin-left: 0.5em;
`

const Frame = styled.div`
  overflow: auto;
`

interface AuthorizationsProps {
  user: IUser
  selectedRowKeys: number[]
  onSelectChange: (keys: number[]) => void
}
const Authorizations: FC<AuthorizationsProps> = ({ user, selectedRowKeys, onSelectChange }) => {
  const [search, setSearch] = useState('')

  const userId = user?.id
  const { data, loading } = useAuthorizations()
  const relatedAuthorizations = useMemo(() => data.filter(authorization => authorization.userId === userId), [
    userId,
    data,
  ])

  const filteredData = useMemo(() => {
    if (!search) return relatedAuthorizations
    if (!relatedAuthorizations) return relatedAuthorizations
    const lowercaseSearch = search.toLowerCase()
    return relatedAuthorizations.filter(authorization =>
      (authorization.accountNumber || '').toLowerCase().includes(lowercaseSearch)
    )
  }, [relatedAuthorizations, search])

  return (
    <Card
      title={
        user ? (
          <>
            <span>{user.name}</span>
            <SubTitle type="secondary">Related authorization</SubTitle>
          </>
        ) : (
          <Skeleton loading={loading} active title={false} />
        )
      }
      extra={
        <Input
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          prefix={<SearchOutlined />}
          placeholder="Search"
        />
      }
    >
      <Frame>
        <AuthorizationsTable
          data={filteredData}
          loading={loading}
          rowSelection={{ selectedRowKeys, onChange: onSelectChange }}
        />
      </Frame>
    </Card>
  )
}

export default Authorizations
