import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Icons } from 'procredit-bank-design-system'
import ContentHeader from 'components/Common/ContentHeader'
import Breadcrumb from 'components/Common/Breadcrumb'
import Catalog from './Catalog'
const { Item } = Breadcrumb
const { HomeFilled } = Icons

interface AccountsProps {}
const AccountsPage: FC<AccountsProps> = () => (
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
        <Item>Accounts</Item>
      </Breadcrumb>
    </ContentHeader>
    <Catalog />
  </>
)

export default AccountsPage
