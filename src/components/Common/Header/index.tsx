import { useState } from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { Wrapper } from './styles'
import { Container } from '../Grid'

import Logo from '../../../assets/logo.svg'
import LangSwitcher from '../LangSwitcher'
import { Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { logoutUserAction } from '../../../store/authentication/actions'
import { useDispatch, useSelector } from 'react-redux'
import OutsideClickHandler from 'react-outside-click-handler'

import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

import get from 'lodash/get'

const ItemsList = ({ config }: Record<string, any>) => {
  return (
    <List>
      {config.map((item: Record<string, any>, index: number) => (
        <Link to={item?.link} key={item?.name}>
          <ListItem button>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        </Link>
      ))}
    </List>
  )
}

const DefineListItem = ({ authorizationType }: Record<string, any>) => {
  const { formatMessage } = useIntl()

  switch (authorizationType.toLowerCase()) {
    case 'admin':
      return (
        <ItemsList
          config={[
            { name: formatMessage({ id: 'home' }), link: '/' },
            { name: formatMessage({ id: 'personal.data' }), link: '/personal-data' },
            { name: formatMessage({ id: 'inbox' }), link: '/inbox' },
          ]}
        />
      )

    case 'citizen':
      return (
        <ItemsList
          config={[
            { name: formatMessage({ id: 'home' }), link: '/' },
            { name: formatMessage({ id: 'personal.data' }), link: '/personal-data' },
            { name: formatMessage({ id: 'create.request' }), link: '/create-reques' },
          ]}
        />
      )

    case 'entrepreneur':
      return (
        <ItemsList
          config={[
            { name: formatMessage({ id: 'home' }), link: '/' },
            { name: formatMessage({ id: 'personal.data' }), link: '/personal-data' },
            { name: formatMessage({ id: 'create.request' }), link: '/create-reques' },
          ]}
        />
      )

    default:
      return null
  }
}

const Header = ({ disableLoginBtn }: Record<string, any>) => {
  const [openBar, setOpenBar] = useState<boolean>(false)
  const { formatMessage } = useIntl()
  const dispatch = useDispatch()
  const { user }: Record<string, any> = useSelector(({ auth }) => auth)

  const logOutHandler = () => dispatch(logoutUserAction())
  const openNavigationBarHandler = () => setOpenBar(pr => !pr)

  return (
    <OutsideClickHandler onOutsideClick={() => setOpenBar(false)}>
      <Wrapper>
        <Container>
          <div className="header">
            <Link to="/">
              <img src={Logo} alt="logo" width={50} />
            </Link>

            <div className="btn-box">
              {get(user, 'token') && (
                <button className="user-navigation" onClick={openNavigationBarHandler}>
                  UN
                </button>
              )}
              {openBar && (
                <div className="navigation-bar">
                  <DefineListItem authorizationType={get(user, 'authorizationType')} />
                </div>
              )}

              {!disableLoginBtn && (
                <Link to={get(user, 'token') ? '/' : '/login'}>
                  <Button
                    variant="contained"
                    color="inherit"
                    className="login-btn"
                    onClick={get(user, 'token') && logOutHandler}
                  >
                    {formatMessage({ id: get(user, 'token') ? 'logout' : 'login' })}
                  </Button>
                </Link>
              )}

              <LangSwitcher />
            </div>
          </div>
        </Container>
      </Wrapper>
    </OutsideClickHandler>
  )
}

export default Header
