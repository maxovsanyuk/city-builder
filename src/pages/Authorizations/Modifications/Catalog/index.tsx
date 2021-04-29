import { FC, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icons from 'procredit-bank-design-system/modules/icons'
import Button from 'procredit-bank-design-system/modules/button'
import ContentHeader from 'components/Common/ContentHeader'
import Breadcrumb from 'components/Common/Breadcrumb'
import Modifications from './Modifications'

const { Item } = Breadcrumb
const { HomeFilled } = Icons

const Actions = styled.div`
  align-items: center;
  display: flex;

  & > *:not(:last-child) {
    margin-right: 16px;
  }
`

interface CatalogProps {}
const Catalog: FC<CatalogProps> = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([])

  const disableSelected = () => {
    // TODO
  }
  const approveSelected = () => {
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
          <Item>Modifications</Item>
        </Breadcrumb>
        <Actions>
          {selectedRowKeys.length > 0 && (
            <>
              <Button type="secondary" onClick={disableSelected}>
                Disable selected
              </Button>
              <Button type="primary" onClick={approveSelected}>
                Approve selected
              </Button>
            </>
          )}
        </Actions>
      </ContentHeader>
      <Modifications selectedRowKeys={selectedRowKeys} onSelectChange={setSelectedRowKeys} />
    </>
  )
}

export default Catalog
