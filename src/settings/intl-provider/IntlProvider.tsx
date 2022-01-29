import React, { FC, Fragment } from 'react'
import { useStore } from 'effector-react'
import { AppLocale } from 'settings/intl-provider/languages'
import { $language } from 'shared/model/lang-switcher/model'
import { IntlProvider as IntlProviderComponent } from 'react-intl'

export const IntlProvider: FC = ({ children }) => {
  const lang = useStore($language)

  const currentAppLocale = (AppLocale as Record<string, any>)[lang || 'en']

  return (
    <IntlProviderComponent locale="en" textComponent={Fragment} messages={currentAppLocale.messages}>
      {children}
    </IntlProviderComponent>
  )
}
