import styled from 'styled-components'
import { FC, useState } from 'react'
import { useStore } from 'effector-react'
import { Language } from '@material-ui/icons'
import { ListItemIcon, MenuItem, Fade, Menu } from '@material-ui/core'
import { $language, $setlanguage } from '../../../../shared/model/lang-switcher/model'

const langConfig = [
  { lang: 'en', label: 'ENG' },
  { lang: 'ru', label: 'RUS' },
]

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

export const LangSwitcher: FC = () => {
  const currentLanguage = useStore($language)
  const changeLangHandler = (language: string) => $setlanguage(language)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <Wrapper>
      <ListItemIcon onClick={handleClick}>
        <Language fontSize="medium" className="lang-switcher-icon" />
      </ListItemIcon>

      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {langConfig.map(({ lang, label }) => {
          return (
            <MenuItem
              key={lang}
              onClick={() => {
                changeLangHandler(lang)
                handleClose()
              }}
              disabled={currentLanguage === lang}
            >
              {label}
            </MenuItem>
          )
        })}
      </Menu>
    </Wrapper>
  )
}
