import React, { FC, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { IntlProvider as IntlProviderComponent } from 'react-intl'
import { AppLocale } from 'settings/languages'

export const IntlProvider: FC = ({ children }) => {
  const { lang } = useSelector(({ common }) => common)

  const currentAppLocale = (AppLocale as Record<string, any>)[lang]

  return (
    <IntlProviderComponent locale="ru" textComponent={Fragment} messages={currentAppLocale.messages}>
      {children}
    </IntlProviderComponent>
  )
}
