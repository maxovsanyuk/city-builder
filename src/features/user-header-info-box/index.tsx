import * as React from 'react'
import * as model from 'processes/auth/login-model'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { history } from 'shared/lib/utils/navigation'
import { ExitToApp, Mail, PersonAdd, Settings } from '@material-ui/icons'
import { Avatar, Divider, Box, IconButton, ListItemIcon, Menu, MenuItem } from '@material-ui/core'

export const UserHeaderInfoBox = ({ user }: Record<string, any>) => {
  const { formatMessage } = useIntl()
  const shortFullName = `${user?.firstName[0]}${user?.surname[0]}`
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <Box className="user-navigation">
      <IconButton onClick={handleClick} size="medium">
        <Avatar>{shortFullName}</Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to="/city-builder/personal-data">
          <MenuItem>
            <ListItemIcon>
              <Avatar />
            </ListItemIcon>
            {formatMessage({ id: 'profile' })}
          </MenuItem>
        </Link>
        <Divider />

        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>

          {formatMessage({ id: 'new.advertisement' })}
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <Mail fontSize="small" />
          </ListItemIcon>

          {formatMessage({ id: 'inbox' })}
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          {formatMessage({ id: 'settings' })}
        </MenuItem>
        <MenuItem
          onClick={() => {
            model.$logoutUser()
            history.push('/')
          }}
        >
          <ListItemIcon>
            <ExitToApp fontSize="small" />
          </ListItemIcon>
          {formatMessage({ id: 'logout' })}
        </MenuItem>
      </Menu>
    </Box>
  )
}
