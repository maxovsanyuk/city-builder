/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Domain, root } from 'effector-root'
import { Event, Store, Effect } from 'effector'
import { attachLogger } from 'effector-logger/attach'

declare global {
  interface Window {
    // add you custom properties and methods
    _app: {
      events: {
        [key: string]: Event<any>
      }
      stores: {
        [key: string]: Store<any>
      }
      effects: {
        [key: string]: Effect<any, any, any>
      }
    }
  }
}

const bindDomain = (domain: Domain) => {
  // @ts-ignore
  window._app = {
    events: {},
    stores: {},
    effects: {},
  }
  domain.onCreateEvent(event => {
    const name = event.compositeName.shortName

    // @ts-ignore
    window._app.events[name] = event
  })

  domain.onCreateStore(store => {
    const name = store.compositeName.shortName

    // @ts-ignore
    window._app.stores[name] = store
  })

  domain.onCreateEffect(effect => {
    const name = effect.compositeName.shortName

    // @ts-ignore
    window._app.effects[name] = effect
  })
}

export const initLogger = () => {
  if (process.env.NODE_ENV === 'development') {
    attachLogger(root)

    // const createInspector = require('effector-inspector')

    bindDomain(root)
    // createInspector()

    // @ts-ignore
    console.log('Effector units (in window._app):', window._app)
  }
}
