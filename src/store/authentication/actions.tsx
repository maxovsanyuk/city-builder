import { LoginData, ActionType } from './model'

export const loginUserAction = (payload: LoginData): any => ({
  type: ActionType.LOGIN_USER,
  payload,
})

export const logoutUserAction = (): any => ({
  type: ActionType.LOGOUT_USER,
})
