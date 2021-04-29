import { FC } from 'react'
import { Link } from 'react-router-dom'
import Icons from 'procredit-bank-design-system/modules/icons'
import Button from 'procredit-bank-design-system/modules/button'
import ContentHeader from 'components/Common/ContentHeader'
import Breadcrumb from 'components/Common/Breadcrumb'
import Authorizations from './Authorizations'

const { Item } = Breadcrumb
const { HomeFilled } = Icons

interface AccountProps {
  id: string
}
const AccountPage: FC<AccountProps> = ({ id }) => (
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
          <Link to="/manage-authorizations/accounts">Accounts</Link>
        </Item>
        <Item>{id}</Item>
      </Breadcrumb>
      <Button type="primary" as={Link} href={`/manage-authorizations/accounts/${id}/create`}>
        Add new relation
      </Button>
    </ContentHeader>
    <Authorizations id={id} />
  </>
)

export default AccountPage
