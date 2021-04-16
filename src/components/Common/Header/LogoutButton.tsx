import { FC } from 'react'
import Button from 'procredit-bank-design-system/modules/button'
import Icons from 'procredit-bank-design-system/modules/icons'
import { useDispatch } from 'react-redux'
import { ActionType } from '../../../store/authentication/model'

const { LogoutOutlined } = Icons

interface LogoutButtonProps {}
const LogoutButton: FC<LogoutButtonProps> = () => {
  const dispatch = useDispatch()

  const handleLogOut = () => dispatch({ type: ActionType.LOGOUT_USER })

  return (
    <Button
      onClick={handleLogOut}
      icon={<LogoutOutlined style={{ fontSize: 20 }} />}
      type="ghost"
      ghost
      size="medium"
      aria-label="Logout"
    />
  )
}

export default LogoutButton
