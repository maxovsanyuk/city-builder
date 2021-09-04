import * as model from 'processes/auth/login-model'
import get from 'lodash/get'
import Logo from 'shared/assets/logo.svg'
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import OutsideClickHandler from 'react-outside-click-handler'
import { useState } from 'react'
import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { useStore } from 'effector-react'
import { Container, LangSwitcher, ThemeSwitcher } from 'shared/ui/molecules'
import { Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

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

  switch (authorizationType?.toLowerCase()) {
    case 'admin':
      return (
        <ItemsList
          config={[
            { name: formatMessage({ id: 'personal.data' }), link: '/personal-data' },
            { name: formatMessage({ id: 'inbox' }), link: '/inbox' },
          ]}
        />
      )

    case 'citizen':
      return (
        <ItemsList
          config={[
            { name: formatMessage({ id: 'personal.data' }), link: '/personal-data' },
            { name: formatMessage({ id: 'create.request' }), link: '/create-reques' },
          ]}
        />
      )

    case 'entrepreneur':
      return (
        <ItemsList
          config={[
            { name: formatMessage({ id: 'personal.data' }), link: '/personal-data' },
            { name: formatMessage({ id: 'create.request' }), link: '/create-reques' },
          ]}
        />
      )

    default:
      return null
  }
}

export const Header = ({ disableLoginBtn }: Record<string, any>) => {
  const user = useStore(model.$user)
  const [openBar, setOpenBar] = useState<boolean>(false)
  const { formatMessage } = useIntl()
  const shortFullName = `${user?.firstName[0]}${user?.surname[0]}`

  const logOutHandler = () => user && model.$logoutUser()
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
                  {shortFullName}
                </button>
              )}
              {openBar && (
                <div className="navigation-bar">
                  <DefineListItem authorizationType={get(user, 'authorizationType')} />
                </div>
              )}

              <LangSwitcher />
              <ThemeSwitcher />

              {!disableLoginBtn && (
                <Link to={get(user, 'token') ? '/' : '/login'}>
                  <Button variant="contained" color="inherit" className="login-btn" onClick={logOutHandler}>
                    {formatMessage({ id: get(user, 'token') ? 'logout' : 'login' })}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </Container>
      </Wrapper>
    </OutsideClickHandler>
  )
}
