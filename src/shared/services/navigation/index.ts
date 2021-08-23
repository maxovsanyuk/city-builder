import { createEvent } from 'effector-root'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export const historyPush = createEvent<string>()
export const historyReplace = createEvent<string>()

historyPush.watch((url) => history.push(url))
historyReplace.watch((url) => history.replace(url))
