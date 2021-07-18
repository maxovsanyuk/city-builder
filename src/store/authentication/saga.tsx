import { put, takeLatest, fork } from 'redux-saga/effects'
import { setCookie, removeCookie } from 'utils'
import { history } from '../configureStore'

// import { createApiCall, loginRoute, MethodType } from 'services/Api';

import { ActionType } from './model'

interface Action {
  type: string
  payload?: any
}

const MockData = [
  {
    email: 'maks@si-ab.com',
    token: 'JWT_TOKEN',
    password: '1aD@test@Maks14',
    fullName: 'Max Ovsianiuk',
    authorizationType: 'admin',
    location: 'Warsaw, Poland',
  },
]

interface UserProps {
  token?: any
  email: string
  password: string
  fullName: string
  authorizationType: string
  location: string
}

export function* loginSaga(): Generator {
  yield takeLatest(ActionType.LOGIN_USER, function* (action: Action) {
    try {
      // TODO: need to uncomment and continue integration with API
      // const response = yield call(createApiCall, { method: MethodType.POST, url: loginRoute, data: payload });

      // TODO: need to remove, it's a temporary mock object

      const user = MockData.find((user: UserProps) => user.email === action.payload.email)

      if (user) {
        setCookie('token', user?.token)
        yield put({ type: ActionType.SET_USER, payload: user })
        yield history.push('/')
      } else {
        alert('Auth error')
        yield put({ type: ActionType.SET_AUTH_ERR })
      }
    } catch (error) {
      // error
    }
  })
}

export function* registerNewUserSaga(): Generator {
  yield takeLatest(ActionType.REGISTER_NEW_USER, function* (action: Action) {
    try {
      // TODO: need to uncomment and continue integration with API
      // const response = yield call(createApiCall, { method: MethodType.POST, url: loginRoute, data: payload });

      MockData.push({ ...action.payload })

      console.log(MockData, 'MockData')
      yield history.push('/login')
    } catch (error) {
      // error
    }
  })
}

export function* confirmLoginSaga(): Generator {
  yield takeLatest(ActionType.CONFIRM_LOGIN_USER, function* () {
    try {
      // TODO: need to uncomment and continue integration with API
      // const response = yield call(createApiCall, { method: MethodType.POST, url: loginRoute, data: payload });

      // TODO: need to remove, it's a temporary mock object

      return {
        confirm: 'ok',
      }
    } catch (error) {
      // error
    }
  })
}

export function* logoutSaga(): Generator {
  yield takeLatest(ActionType.LOGOUT_USER, function* () {
    try {
      removeCookie('token')
      yield put({ type: ActionType.SET_USER, payload: null })
      yield history.push('/')
    } catch (error) {
      // error
    }
  })
}

export default [fork(loginSaga), fork(confirmLoginSaga), fork(logoutSaga), fork(registerNewUserSaga)]
