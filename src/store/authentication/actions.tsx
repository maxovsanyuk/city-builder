import { LoginData, ActionType, RigisterData } from './model'

export const loginUserAction = (payload: LoginData): any => ({
  type: ActionType.LOGIN_USER,
  payload,
})

export const logoutUserAction = (): any => ({
  type: ActionType.LOGOUT_USER,
})

export const setAuthErrAction = (): any => ({
  type: ActionType.SET_AUTH_ERR,
})

export const registerNewUserAction = (payload: RigisterData) => ({
  type: ActionType.REGISTER_NEW_USER,
  payload,
})
