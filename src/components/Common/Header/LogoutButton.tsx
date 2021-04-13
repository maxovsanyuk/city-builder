import * as React from 'react'
import Button from 'procredit-bank-design-system/modules/button'
import Icons from 'procredit-bank-design-system/modules/icons'

const { LogoutOutlined } = Icons

interface LogoutButtonProps {}
const LogoutButton: React.FC<LogoutButtonProps> = () => (
  <Button icon={<LogoutOutlined style={{ fontSize: 20 }} />} type="ghost" ghost size="medium" aria-label="Logout" />
)

export default LogoutButton
