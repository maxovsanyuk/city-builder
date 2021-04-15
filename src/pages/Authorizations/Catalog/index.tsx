import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icons from 'procredit-bank-design-system/modules/icons'
import Button from 'procredit-bank-design-system/modules/button'
import Breadcrumb from 'components/Common/Breadcrumb'
import Authorizations from './Authorizations'

const { Item } = Breadcrumb
const { HomeFilled } = Icons

const Flex = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: -20px;
  margin-bottom: 16px;
`

interface CatalogProps {}
const Catalog: FC<CatalogProps> = () => (
  <>
    <Flex>
      <Breadcrumb>
        <Item>
          <Link to="/">
            <HomeFilled /> <span className="breadcrumb-item-text">Home</span>
          </Link>
        </Item>
        <Item>
          <Link to="/authorizations">Managing authorizations</Link>
        </Item>
        <Item>Authorizations</Item>
      </Breadcrumb>
      <Button key="1" type="primary" as={Link} href="/authorizations/create">
        Add new authorization
      </Button>
    </Flex>
    <Authorizations />
  </>
)

export default Catalog
