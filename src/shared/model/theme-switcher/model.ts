import { persist } from 'effector-storage/local'
import { createEvent, restore } from 'effector-root'

type THEMES = 'dark' | 'light'

export const $setTheme = createEvent<THEMES>()
export const $theme = restore<THEMES>($setTheme, 'dark')
persist({ store: $theme, key: 'theme' })
