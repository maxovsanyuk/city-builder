import { createEvent, restore } from 'effector-root'

export const $setlanguage = createEvent<string>()
export const $language = restore<string>($setlanguage, 'en')
