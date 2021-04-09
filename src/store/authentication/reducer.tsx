import { ActionType } from './model'
import { Action } from '../model'
import createReducer from '../createReducer'

export interface AuthenticationReducerType {
  user: Record<string, unknown>
}

const defaultState: AuthenticationReducerType = {
  user: {},
}

export const authenticationReducer = createReducer<AuthenticationReducerType>(defaultState, {
  [ActionType.SET_USER](state: AuthenticationReducerType, action: Action<number>) {
    return { ...state, user: action.payload }
  },
})
