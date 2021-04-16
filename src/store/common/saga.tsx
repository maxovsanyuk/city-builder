import { put, takeLatest, fork } from 'redux-saga/effects'
import { ActionType } from './model'

export function* changeLangSaga(): Generator {
  yield takeLatest(ActionType.CHANGE_LANG, function* (action: any) {
    try {
      yield put({ type: ActionType.SET_LANG, payload: action.payload.lang })
    } catch (error) {
      // error
    }
  })
}

export default [fork(changeLangSaga)]
