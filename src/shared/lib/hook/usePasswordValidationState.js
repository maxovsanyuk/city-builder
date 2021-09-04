import { useEffect, useState } from 'react'

const passwordValidationConfig = [
  {
    type: 'oneOrMoreLowercaseLetters',
    text: 'One or more lowercase letters',
  },
  {
    type: 'oneOrMoreUppercaseLetters',
    text: 'One or more uppercase letters',
  },
  {
    type: 'oneOrMoreSpecialCharacters',
    text: 'One or more special characters',
  },
  {
    type: 'oneOrMoreNumbers',
    text: 'One or more numbers',
  },
  {
    type: 'minLength',
    text: 'Minimum of eight characters',
  },
]

const checkPasswordValidation = (password = '') => {
  return [
    {
      type: 'minLength',
      isValid: password.length >= 8,
    },

    {
      type: 'oneOrMoreLowercaseLetters',
      isValid: password.toUpperCase() !== password,
    },

    {
      type: 'oneOrMoreUppercaseLetters',
      isValid: password.toLowerCase() !== password,
    },

    {
      type: 'oneOrMoreNumbers',
      isValid: /\d/.test(password),
    },

    {
      type: 'oneOrMoreSpecialCharacters',
      isValid: !!password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/),
    },
  ]
}

export const usePasswordValidationState = password => {
  const checkPasswordValidationResult = checkPasswordValidation(password)
  const [isPassedValidation, setItsPassedValidation] = useState(false)
  const [passwordState, setPasswordState] = useState({
    showPassword: false,
    isFocused: false,

    validation: {
      oneOrMoreLowercaseLetters: false,
      oneOrMoreUppercaseLetters: false,
      oneOrMoreSpecialCharacters: false,
      oneOrMoreNumbers: false,
      minLength: false,
    },

    totalValidationCounter: passwordValidationConfig.length,
    passedValidationCounter: 0,
  })

  useEffect(() => {
    setPasswordState(
      checkPasswordValidationResult.reduce(
        (acc, next) => {
          return {
            ...acc,
            passedValidationCounter: next.isValid
              ? !acc.validation[`${next.type}`]
                ? acc.passedValidationCounter + 1
                : acc.passedValidationCounter
              : acc.validation[`${next.type}`]
              ? acc.passedValidationCounter - 1
              : acc.passedValidationCounter,

            validation: { ...acc.validation, [`${next.type}`]: next.isValid },
          }
        },
        { ...passwordState }
      )
    )
  }, [password])

  useEffect(() => {
    if (passwordState.totalValidationCounter === passwordState.passedValidationCounter) {
      return setItsPassedValidation(true)
    } else {
      return setItsPassedValidation(false)
    }
  }, [passwordState.totalValidationCounter === passwordState.passedValidationCounter])

  return { passwordState, setPasswordState, isPassedValidation }
}
