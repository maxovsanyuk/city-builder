import React, { FC, Fragment } from 'react'
import { useStore } from 'effector-react'
import { $language } from '../../model/LangSwitcher/model'
import { IntlProvider as IntlProviderComponent } from 'react-intl'
import { AppLocale } from 'shared/settings/intlProvider/languages'

export const IntlProvider: FC = ({ children }) => {
  const lang = useStore($language)

  const currentAppLocale = (AppLocale as Record<string, any>)[lang || 'en']

  return (
    <IntlProviderComponent locale="en" textComponent={Fragment} messages={currentAppLocale.messages}>
      {children}
    </IntlProviderComponent>
  )
}
