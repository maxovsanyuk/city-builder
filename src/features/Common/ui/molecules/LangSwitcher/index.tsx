import { FC } from 'react'
import { useIntl } from 'react-intl'
import { useStore } from 'effector-react'
import { FormControl, MenuItem, Select } from '@material-ui/core'
import { $language, $setlanguage } from '../../../model/LangSwitcher/model'

const LangSwitcher: FC = () => {
  const { formatMessage } = useIntl()
  const lang = useStore($language)
  const changeLangHandler = (event: Record<string, string | any>) => $setlanguage(event?.target.value)

  return (
    <FormControl variant="standard">
      <Select
        value={lang}
        onChange={changeLangHandler}
        className="lang-swicher"
        label={formatMessage({ id: 'language' })}
      >
        <MenuItem value="en" disabled={lang === 'en'}>
          ENG
        </MenuItem>
        <MenuItem value="ru" disabled={lang === 'ru'}>
          RUS
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default LangSwitcher
