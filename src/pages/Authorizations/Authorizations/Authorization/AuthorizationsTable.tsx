import { FC, useMemo } from 'react'
import { Tooltip, Table } from 'procredit-bank-design-system'
import RenderAccountTypeTag from 'components/Common/Tables/RenderAccountTypeTag'
import RenderAuthorizationTags from 'components/Common/Tables/RenderAuthorizationTags'
import { getUniqueValuesFromObjectArray } from 'utils/helpers'
import { IData, IAuthorization } from '../mockData'

const RenderComment = (text: string) => (
  <Tooltip placement="bottomRight" title={text}>
    {text}
  </Tooltip>
)

interface AuthorizationsTableProps {
  data: IData[]
  loading?: boolean
  rowSelection: {
    selectedRowKeys: number[]
    onChange: (keys: number[]) => void
  }
}
const AuthorizationsTable: FC<AuthorizationsTableProps> = ({ data, loading = false, rowSelection }) => {
  const columns = useMemo(() => {
    const accountTypes = getUniqueValuesFromObjectArray<string>(data, 'accountType')
    const currencies = getUniqueValuesFromObjectArray<string>(data, 'currency')
    const relations = getUniqueValuesFromObjectArray<string>(data, 'relations')
    const authorizations = getUniqueValuesFromObjectArray<string>(data, 'authorization')
    return [
      {
        title: 'Account number',
        dataIndex: 'accountNumber',
        sorter: (a: IData, b: IData) => b.name.localeCompare(a.name),
        width: 240,
      },
      {
        title: 'Account type',
        dataIndex: 'accountType',
        filters: accountTypes.map(accountType => ({
          text: accountType,
          value: accountType,
        })),
        filterMultiple: true,
        onFilter: (value: string, record: IData) => record.accountType === value,
        sorter: (a: IData, b: IData) => (b.accountType || '').localeCompare(a.accountType || ''),
        render: RenderAccountTypeTag,
        width: 240,
      },
      {
        title: 'Currency',
        dataIndex: 'currency',
        filters: currencies.map(currency => ({
          text: currency,
          value: currency,
        })),
        filterMultiple: true,
        onFilter: (value: string, record: IData) => record.currency === value,
        sorter: (a: IData, b: IData) => (b.currency || '').localeCompare(a.currency || ''),
        width: 200,
      },
      {
        title: 'Relations',
        dataIndex: 'relations',
        sorter: (a: IData, b: IData) => (b.relations || '').localeCompare(a.relations || ''),
        filters: relations.map(text => ({
          text: text,
          value: text,
        })),
        filterMultiple: true,
        onFilter: (value: IAuthorization, record: IData) => record.relations?.includes(value),
        width: 200,
      },
      {
        title: 'Authorization',
        dataIndex: 'authorization',
        sorter: (a: IData, b: IData) => (b.authorization?.length || 0) - (a.authorization?.length || 0),
        filters: authorizations.map(text => ({
          text: text,
          value: text,
        })),
        filterMultiple: true,
        onFilter: (value: IAuthorization, record: IData) => record.authorization?.includes(value),
        render: RenderAuthorizationTags,
        width: 200,
      },
      {
        title: 'Start Date',
        dataIndex: 'startDate',
        sorter: (a: IData, b: IData) => (b.startDate || '').localeCompare(a.startDate || ''),
        width: 180,
      },
      {
        title: 'End Date',
        dataIndex: 'endDate',
        sorter: (a: IData, b: IData) => (b.endDate || '').localeCompare(a.endDate || ''),
        width: 180,
      },
      {
        title: 'Comment',
        dataIndex: 'comment',
        sorter: (a: IData, b: IData) => (b.comment || '').localeCompare(a.comment || ''),
        ellipsis: {
          showTitle: false,
        },
        render: RenderComment,
        width: 200,
      },
    ]
  }, [data])

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={{ position: ['bottomLeft'], showSizeChanger: true }}
      rowSelection={{
        ...(rowSelection || {}),
        type: 'checkbox',
      }}
      tableLayout="fixed"
    />
  )
}

export default AuthorizationsTable
