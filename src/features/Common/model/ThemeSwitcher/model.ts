import { createEvent, restore } from 'effector-root'

export const $setTheme = createEvent<string>()
export const $theme = restore<string>($setTheme, 'dark')
