import { FC, useMemo, MouseEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { getUniqueValuesFromObjectArray } from 'utils/helpers'
import { history } from 'store/configureStore'
import { useIntl } from 'react-intl'

import styled from 'styled-components'

import RenderAuthorizationTags from 'components/Common/Tables/RenderAuthorizationTags'
import RenderStatusTag from 'components/Common/Tables/RenderStatusTag'
import { IData, IAuthorization } from '../mockData'

import { Dropdown, Table, Button, Icons, Space, Menu } from 'procredit-bank-design-system'

const { MoreOutlined } = Icons
const { Item } = Menu

const StyledTable = styled(Table)`
  & tbody tr {
    cursor: pointer;
  }
`

const MoreOptions = (value: any, record: IData) => {
  const { formatMessage } = useIntl()

  const handleAction = ({ key }: { key: string }) => {
    switch (key) {
      case 'edit':
        return history.push(`/manage-authorizations/accounts/new-relation/${record.accountNumber}`)
      case 'disable_eba':
        return history.push('/404')
      case 'dismiss':
        return history.push('/404')
      case 'add_relation':
        return history.push('/404')

      default:
        return
    }
  }

  const menu = (
    <Menu onClick={handleAction}>
      <Item key="edit">{formatMessage({ id: 'edit' })}</Item>
      <Item key="disable_eba">{formatMessage({ id: 'disable.eba.access' })}</Item>
      <Item key="dismiss">{formatMessage({ id: 'dismiss' })}</Item>
      <Item key="add_relation">{formatMessage({ id: 'add.new.relation' })}</Item>
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
