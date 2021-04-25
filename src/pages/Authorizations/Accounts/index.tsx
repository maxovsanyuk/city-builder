import { FC } from 'react'
import { Link } from 'react-router-dom'
import Icons from 'procredit-bank-design-system/modules/icons'
import ContentHeader from 'components/Common/ContentHeader'
import Breadcrumb from 'components/Common/Breadcrumb'
import Accounts from './Accounts'

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
          <Link to="/authorizations">Managing authorizations</Link>
        </Item>
        <Item>Accounts</Item>
      </Breadcrumb>
    </ContentHeader>
    <Accounts />
  </>
)

export default AccountsPage
