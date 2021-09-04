import { FC } from 'react'
import { useIntl } from 'react-intl'
import { useStore } from 'effector-react'
import { FormControl, MenuItem, Select } from '@material-ui/core'
import { $setTheme, $theme } from '../../../model/ThemeSwitcher/model'

export const ThemeSwitcher: FC = () => {
  const { formatMessage } = useIntl()
  const theme = useStore($theme)
  const changeThemeHandler = (event: Record<string, string | any>) => $setTheme(event?.target.value)

  return (
    <FormControl variant="standard">
      <Select
        value={theme}
        onChange={changeThemeHandler}
        className="theme-swicher"
        label={formatMessage({ id: 'theme' })}
      >
        <MenuItem value="dark" disabled={theme === 'dark'}>
          {formatMessage({ id: 'dark' })}
        </MenuItem>
        <MenuItem value="light" disabled={theme === 'light'}>
          {formatMessage({ id: 'light' })}
        </MenuItem>
      </Select>
    </FormControl>
  )
}
