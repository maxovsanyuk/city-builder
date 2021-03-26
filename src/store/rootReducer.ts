import { History } from 'history'
import { combineReducers } from 'redux'
import { routerReducer, RouterState } from 'react-router-redux'

import { authenticationReducer, AuthenticationReducerType } from './authentication/reducer'
import { commonReducer, CommonReducerType } from './common/reducer'

export interface RootState {
  common: CommonReducerType
  auth: AuthenticationReducerType
  routerReducer: RouterState
}

// eslint-disable-next-line
export default (history: History): any =>
  combineReducers({
    common: commonReducer,
    auth: authenticationReducer,
    routerReducer,
  })
