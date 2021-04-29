import { FC, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icons from 'procredit-bank-design-system/modules/icons'
import Button from 'procredit-bank-design-system/modules/button'
import ContentHeader from 'components/Common/ContentHeader'
import Breadcrumb from 'components/Common/Breadcrumb'
import Authorizations from './Authorizations'

import { useUser } from '../mockData'

const { Item } = Breadcrumb
const { HomeFilled } = Icons

const Actions = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 16px;
  }
`

interface AuthorizationProps {
  id: string
}
const Authorization: FC<AuthorizationProps> = ({ id }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([])

  if (!id) return <div>No id was passed</div>

  const user = useUser(id)

  const disableSelected = () => {
    // TODO
  }

  return (
    <>
      <ContentHeader>
        <Breadcrumb>
          <Item>
            <Link to="/">
              <HomeFilled /> <span className="breadcrumb-item-text">Home</span>
            </Link>
          </Item>
          <Item>
            <Link to="/manage-authorizations">Managing authorizations</Link>
          </Item>
          <Item>
            <Link to="/manage-authorizations/authorizations">Authorizations</Link>
          </Item>
          <Item>{user.name}</Item>
        </Breadcrumb>
        <Actions>
          {selectedRowKeys.length > 0 && (
            <Button type="secondary" onClick={disableSelected}>
              Disable selected
            </Button>
          )}
          <Button type="primary" as={Link} href="/manage-authorizations/authorizations/create">
            Add new relation
          </Button>
        </Actions>
      </ContentHeader>
      <Authorizations user={user} selectedRowKeys={selectedRowKeys} onSelectChange={setSelectedRowKeys} />
    </>
  )
}

export default Authorization
