import { FC } from 'react'
import Button from 'procredit-bank-design-system/modules/button'
import Icons from 'procredit-bank-design-system/modules/icons'

const { LogoutOutlined } = Icons

interface LogoutButtonProps {}
const LogoutButton: FC<LogoutButtonProps> = () => (
  <Button icon={<LogoutOutlined style={{ fontSize: 20 }} />} type="ghost" ghost size="medium" aria-label="Logout" />
)

export default LogoutButton
