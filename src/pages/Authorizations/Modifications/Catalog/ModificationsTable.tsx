import { FC, useMemo } from 'react'
import { Button, Space, Table } from 'procredit-bank-design-system'
import { getUniqueValuesFromObjectArray } from 'utils/helpers'
import RenderAuthorizationTags from 'components/Common/Tables/RenderAuthorizationTags'
import RenderAccountTypeTag from 'components/Common/Tables/RenderAccountTypeTag'
import RenderStatusTags from 'components/Common/Tables/RenderStatusTags'
import RenderTextCell from 'components/Common/Tables/RenderTextCell'

import { IData, IType, IAuthorization } from '../mockData'

const MoreOptions = (value: any, record: IData) => {
  const approveModification = () => {
    // TODO
  }
  const declineModification = () => {
    // TODO
  }

  return (
    <Space size="middle" onClick={(e: MouseEvent) => e.stopPropagation()}>
      <Button type="text" onClick={approveModification} danger>
        Approve
      </Button>
      <Button type="text" onClick={declineModification} danger>
        Decline
      </Button>
    </Space>
  )
}

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
    const operationTypes = getUniqueValuesFromObjectArray<string>(data, 'type')
    const accountTypes = getUniqueValuesFromObjectArray<string>(data, 'accountType')
    const authorizations = getUniqueValuesFromObjectArray<string>(data, 'authorization')
    return [
      {
        title: 'Operation type',
        dataIndex: 'type',
        sorter: (a: IData, b: IData) => b.type.localeCompare(a.type),
        filters: operationTypes.map(text => ({
          text: text,
          value: text,
        })),
        filterMultiple: true,
        onFilter: (value: IType, record: IData) => record.type === value,
        width: 240,
      },
      {
        title: 'Full Name',
        dataIndex: 'name',
        sorter: (a: IData, b: IData) => (b.name || '').localeCompare(a.name || ''),
        render: RenderTextCell,
        width: 240,
      },
      {
        title: 'Account number',
        dataIndex: 'accountNumber',
        sorter: (a: IData, b: IData) => (b.accountNumber || '').localeCompare(a.accountNumber || ''),
        render: RenderTextCell,
        width: 240,
      },
      {
        title: 'Account type',
        dataIndex: 'accountType',
        sorter: (a: IData, b: IData) => (b.accountType || '').localeCompare(a.accountType || ''),
        filters: accountTypes.map(text => ({
          text: text,
          value: text,
        })),
        filterMultiple: true,
        onFilter: (value: string, record: IData) => record.type === value,
        render: RenderAccountTypeTag,
        width: 240,
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
        width: 240,
      },
      {
        title: 'Date',
        dataIndex: 'date',
        sorter: (a: IData, b: IData) => b.date.localeCompare(a.date),
        width: 180,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        sorter: (a: IData, b: IData) => b.date.localeCompare(a.date),
        render: RenderStatusTags,
        width: 320,
      },
      {
        title: 'Action',
        key: 'action',
        render: MoreOptions,
        width: 180,
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
