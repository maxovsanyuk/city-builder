import { createEvent, restore } from 'effector-root'

export const $setAdvertisement = createEvent<Record<string, any> | null>()
export const $resetAdvertisement = createEvent()
export const $advertisement = restore<Record<string, any> | null>($setAdvertisement, null).reset($resetAdvertisement)
