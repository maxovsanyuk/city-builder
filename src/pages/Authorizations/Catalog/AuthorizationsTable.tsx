import React, { FC, useMemo, MouseEvent } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Dropdown from 'procredit-bank-design-system/modules/dropdown'
import Table from 'procredit-bank-design-system/modules/table'
import Button from 'procredit-bank-design-system/modules/button'
import Icons from 'procredit-bank-design-system/modules/icons'
import Space from 'procredit-bank-design-system/modules/space'
import Menu from 'procredit-bank-design-system/modules/menu'
import Tag from 'procredit-bank-design-system/modules/tag'
import { IData, IAuthorization } from '../mockData'

const { MoreOutlined } = Icons
const { Item } = Menu

const StyledTable = styled(Table)`
  & tbody tr {
    cursor: pointer;
  }
`
const TagList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
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

const RenderAuthorizationTags = (tags: string[]) => {
  if (!tags || tags.length === 0) return '-'
  return (
    <TagList>
      {tags.map(tag => {
        if (!tag) return null
        let color = ''
        if (tag === 'A') color = 'green'
        if (tag === 'B') color = 'yellow'
        if (tag === 'C') color = 'blue'
        return (
          <li key={tag}>
            <Tag color={color}>{tag}</Tag>
          </li>
        )
      })}
    </TagList>
  )
}

const RenderStatusTag = (text: string) => {
  if (!text) return '-'
  let color = ''
  if (text === 'new') color = 'volcano'
  if (text === 'eba') color = 'green'
  if (text === 'no-eba') color = 'magenta'
  if (text === 'dismissed') color = 'red'
  return <Tag color={color}>{text}</Tag>
}

interface AuthorizationsTableProps {
  data: IData[]
  loading?: boolean
}
const AuthorizationsTable: FC<AuthorizationsTableProps> = ({ data, loading = false }) => {
  const history = useHistory()
  const columns = useMemo(() => {
    const authorizations = Array.from(new Set(data?.map(d => d.authorization).flat() || []))
    const statuses = Array.from(new Set(data?.map(d => d.status) || []))
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
        onClick: () => history.push(`/authorizations/${record.userId}`),
      })}
    />
  )
}

export default AuthorizationsTable
