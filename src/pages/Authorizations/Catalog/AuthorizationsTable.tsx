import { FC, useMemo } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import Dropdown from 'procredit-bank-design-system/modules/dropdown'
import ProTable from 'procredit-bank-design-system/modules/table'
import Button from 'procredit-bank-design-system/modules/button'
import Icons from 'procredit-bank-design-system/modules/icons'
import Space from 'procredit-bank-design-system/modules/space'
import Menu from 'procredit-bank-design-system/modules/menu'
import Tag from 'procredit-bank-design-system/modules/tag'
import { IData, IAuthorization } from './mockData'

const { MoreOutlined } = Icons
const { Item } = Menu

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
    <Space size="middle">
      <Dropdown overlay={menu}>
        <Button type="ghost" aria-label="Show options">
          <MoreOutlined />
        </Button>
      </Dropdown>
    </Space>
  )
}

const RenderAuthorizationTags = (tags: string[]) => (
  <TagList>
    {tags.map(tag => {
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

const RenderStatusTag = (text: string) => {
  const { formatMessage: f } = useIntl()
  let color = ''
  if (text === 'new') color = 'volcano'
  if (text === 'eba') color = 'green'
  if (text === 'no-eba') color = 'magenta'
  if (text === 'dismissed') color = 'red'
  return <Tag color={color}>{f({ id: `authorizations.status.${text}`, defaultMessage: text })}</Tag>
}

interface AuthorizationsTableProps {
  data: IData[]
}
const AuthorizationsTable: FC<AuthorizationsTableProps> = ({ data }) => {
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

  return <ProTable columns={columns} dataSource={data} pagination={{ showSizeChanger: true }} />
}

export default AuthorizationsTable
