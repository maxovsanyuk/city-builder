export enum ActionType {
  // common
  SET_USER = 'SET_USER',

  // login
  LOGIN_USER = 'LOGIN_USER',
  CONFIRM_LOGIN_USER = 'CONFIRM_LOGIN_USER',

  // logout
  LOGOUT_USER = 'LOGOUT_USER',
}

export interface LoginData {
  email: string | null
  password: string | null
}
