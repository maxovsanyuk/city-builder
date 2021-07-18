import { FC } from 'react'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import * as CommonActions from 'store/common/actions'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'

const LangSwitcher: FC = () => {
  const { lang } = useSelector(({ common }) => common)
  const dispatch = useDispatch()

  const { formatMessage } = useIntl()

  const changeLang = (event: Record<string, string | any>) => {
    dispatch(CommonActions.changeLangAction({ lang: event?.target.value }))
  }

  return (
    <FormControl variant="standard">
      <Select value={lang} onChange={changeLang} className="lang-swicher" label={formatMessage({ id: 'language' })}>
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
