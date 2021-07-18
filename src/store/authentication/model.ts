export enum ActionType {
  // common
  SET_USER = 'SET_USER',

  // login
  LOGIN_USER = 'LOGIN_USER',
  CONFIRM_LOGIN_USER = 'CONFIRM_LOGIN_USER',

  // logout
  LOGOUT_USER = 'LOGOUT_USER',

  SET_AUTH_ERR = 'SET_AUTH_ERR',
  REGISTER_NEW_USER = 'REGISTER_NEW_USER',
}

export interface LoginData {
  email?: string | null
  password?: string | null
}

export interface RigisterData {
  token?: any
  email: string
  password: string
  fullName: string
  authorizationType: string
  userCountry: string
  userCity: string
}
