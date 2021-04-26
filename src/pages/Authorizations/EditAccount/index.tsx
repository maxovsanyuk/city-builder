import { FC } from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'

// Components

import ContentHeader from 'components/Common/ContentHeader'
import Breadcrumb from 'components/Common/Breadcrumb'
import EditAccountComponent from './EditAccountComponent'

// procredit-bank-design-system

import Icons from 'procredit-bank-design-system/modules/icons'

const { Item } = Breadcrumb
const { HomeFilled } = Icons

interface AccountsProps {}
const EditAccount: FC<AccountsProps> = () => {
  const { formatMessage } = useIntl()

  return (
    <>
      <ContentHeader>
        <Breadcrumb>
          <Item>
            <Link to="/">
              <HomeFilled /> <span className="breadcrumb-item-text">{formatMessage({ id: 'home' })}</span>
            </Link>
          </Item>
          <Item>
            <Link to="/authorizations">{formatMessage({ id: 'managing.authorizations' })}</Link>
          </Item>
          <Item>
            <Link to="/authorizations/accounts">{formatMessage({ id: 'accounts' })}</Link>
          </Item>

          <Item>{formatMessage({ id: 'edit' })}</Item>
        </Breadcrumb>
      </ContentHeader>
      <EditAccountComponent />
    </>
  )
}

export default EditAccount
