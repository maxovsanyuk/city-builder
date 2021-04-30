import { FC, useMemo, MouseEvent } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Dropdown, Table, Button, Icons, Space, Menu } from 'procredit-bank-design-system'
import RenderAuthorizationTags from 'components/Common/Tables/RenderAuthorizationTags'
import RenderStatusTag from 'components/Common/Tables/RenderStatusTag'
import { getUniqueValuesFromObjectArray } from 'utils/helpers'
import { IData, IAuthorization } from '../mockData'
const { MoreOutlined } = Icons
const { Item } = Menu

const StyledTable = styled(Table)`
  & tbody tr {
    cursor: pointer;
  }
`

const MoreOptions = (value: any, record: IData) => {
  const handleAction = ({ key }: { key: string }) => {
    // !TODO: Handle selected action here
    // ...
  }

  const menu = (
    <Menu onSelect={handleAction}>
      <Item key="edit">Edit</Item>
      <Item key="disable_eba">Disable EBA access</Item>
      <Item key="dismiss">Dismiss</Item>
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

interface AuthorizationsTableProps {
  data: IData[]
  loading?: boolean
}
const AuthorizationsTable: FC<AuthorizationsTableProps> = ({ data, loading = false }) => {
  const history = useHistory()
  const columns = useMemo(() => {
    const authorizations = getUniqueValuesFromObjectArray<string>(data, 'authorization')
    const statuses = getUniqueValuesFromObjectArray<string>(data, 'status')
    return [
      {
        title: 'Full Name',
        dataIndex: 'name',
        sorter: (a: IData, b: IData) => b.name.localeCompare(a.name),
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
      },
      {
        title: 'Status',
        dataIndex: 'status',
        filters: statuses.map(text => ({
          text: text,
          value: text,
        })),
        filterMultiple: true,
        onFilter: (value: string, record: IData) => record.status === value,
        sorter: (a: IData, b: IData) => b.status.localeCompare(a.status),
        render: RenderStatusTag,
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
      onRow={(record: IData) => ({
        onClick: () => history.push(`/manage-authorizations/authorizations/${record.userId}`),
      })}
    />
  )
}

export default AuthorizationsTable
