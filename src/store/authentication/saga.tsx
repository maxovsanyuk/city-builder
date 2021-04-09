import { put, takeLatest, fork } from 'redux-saga/effects'
import { setCookie, removeCookie } from 'utils'
import { history } from '../configureStore'

// import { createApiCall, loginRoute, MethodType } from 'services/Api';
import { ActionType } from './model'

export function* loginSaga(): Generator {
  yield takeLatest(ActionType.LOGIN_USER, function* () {
    try {
      // TODO: need to uncomment and continue integration with API
      // const response = yield call(createApiCall, { method: MethodType.POST, url: loginRoute, data: payload });

      // TODO: need to remove, it's a temporary mock object
      const response = {
        status: 'ok',
        user: {
          name: 'user_name',
          token: 'JWT_TOKEN',
        },
      }

      if (response.status === 'ok') {
        setCookie('token', response.user.token)
        yield put({ type: ActionType.SET_USER, payload: response.user })
        yield history.push('/')
      } else {
        // error
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
      yield history.push('/login')
    } catch (error) {
      // error
    }
  })
}

export default [fork(loginSaga), fork(logoutSaga)]
