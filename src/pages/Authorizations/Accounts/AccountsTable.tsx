import { FC, useMemo, MouseEvent } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Dropdown from 'procredit-bank-design-system/modules/dropdown'
import Table from 'procredit-bank-design-system/modules/table'
import Button from 'procredit-bank-design-system/modules/button'
import Icons from 'procredit-bank-design-system/modules/icons'
import Space from 'procredit-bank-design-system/modules/space'
import Menu from 'procredit-bank-design-system/modules/menu'
import Tag from 'procredit-bank-design-system/modules/tag'
import { getUniqueValuesFromObjectArray } from 'utils/helpers'
import { IAccount } from './mockData'

const { MoreOutlined } = Icons
const { Item } = Menu

const StyledTable = styled(Table)`
  & tbody tr {
    cursor: pointer;
  }
`

const MoreOptions = (value: any, record: IAccount) => {
  const handleAction = ({ key }: { key: string }) => {
    // !TODO: Handle selected action here
    // ...
  }

  const menu = (
    <Menu onSelect={handleAction}>
      <Item key="edit">Edit</Item>
      <Item key="disable_eba">Disable all relations</Item>
      <Item key="add_relation">Add new relation</Item>
    </Menu>
  )

  return (
    <Space size="middle" onClick={(e: MouseEvent) => e.stopPropagation()}>
      <Dropdown overlay={menu}>
        <Button type="ghost" aria-label="Show options">
          <MoreOutlined />
        </Button>
      </Dropdown>
    </Space>
  )
}

const RenderAccountTypeTag = (tag: string) => {
  if (!tag) return '-'

  let color = ''
  if (tag === 'current') color = 'volcano'
  if (tag === 'creditLine') color = 'green'
  if (tag === 'flexSave') color = 'purple'
  return <Tag color={color}>{tag}</Tag>
}

const PrettyNumber = (num: number) =>
  new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num)

interface AccountsTableProps {
  data: IAccount[]
  loading?: boolean
}
const AccountsTable: FC<AccountsTableProps> = ({ data, loading = false }) => {
  const history = useHistory()
  const columns = useMemo(() => {
    const accountTypes = getUniqueValuesFromObjectArray<string>(data, 'accountType')
    const currencies = getUniqueValuesFromObjectArray<string>(data, 'currency')
    return [
      {
        title: 'Account number',
        dataIndex: 'accountNumber',
        sorter: (a: IAccount, b: IAccount) => b.accountNumber.localeCompare(a.accountNumber),
      },
      {
        title: 'Account type',
        dataIndex: 'accountType',
        sorter: (a: IAccount, b: IAccount) => b.accountType.localeCompare(a.accountType),
        filters: accountTypes.map(text => ({
          text: text,
          value: text,
        })),
        filterMultiple: true,
        onFilter: (value: string, record: IAccount) => record.accountType === value,
        render: RenderAccountTypeTag,
      },
      {
        title: 'Currency',
        dataIndex: 'currency',
        filters: currencies.map(text => ({
          text: text,
          value: text,
        })),
        filterMultiple: true,
        onFilter: (value: string, record: IAccount) => record.currency === value,
        sorter: (a: IAccount, b: IAccount) => b.currency.localeCompare(a.currency),
      },
      {
        title: 'Limit amount',
        dataIndex: 'limitAmount',
        sorter: (a: IAccount, b: IAccount) => (b.limitAmount || 0) - (a.limitAmount || 0),
        render: PrettyNumber,
      },
      {
        title: 'Required authorizations',
        dataIndex: 'requiredAuthorizations',
        sorter: (a: IAccount, b: IAccount) => (b.requiredAuthorizations || 0) - (a.requiredAuthorizations || 0),
      },
      {
        title: '',
        key: 'action',
        render: MoreOptions,
      },
    ]
  }, [data])

  return (
    <StyledTable
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={{ position: ['bottomLeft'], showSizeChanger: true }}
      onRow={(account: IAccount) => ({
        onClick: () => history.push(`/authorizations/accounts/${account.accountNumber}`),
      })}
    />
  )
}

export default AccountsTable
