import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Icons, Button } from 'procredit-bank-design-system'
import ContentHeader from 'components/Common/ContentHeader'
import Breadcrumb from 'components/Common/Breadcrumb'
import Authorizations from './Authorizations'

const { Item } = Breadcrumb
const { HomeFilled } = Icons

interface CatalogProps {}
const Catalog: FC<CatalogProps> = () => (
  <>
    <ContentHeader>
      <Breadcrumb>
        <Item>
          <Link to="/">
            <HomeFilled /> <span className="breadcrumb-item-text">Home</span>
          </Link>
        </Item>
        <Item>
          <Link to="/manage-authorizations/authorizations">Managing authorizations</Link>
        </Item>
        <Item>Authorizations</Item>
      </Breadcrumb>
      <Button type="primary" as={Link} href="/manage-authorizations/authorizations/create">
        Add new authorization
      </Button>
    </ContentHeader>
    <Authorizations />
  </>
)

export default Catalog