import { all } from 'redux-saga/effects'

import authenticationSagas from './authentication/saga'
import commonSagas from './common/saga'

export default function* startForman(): Generator {
  yield all([...authenticationSagas, ...commonSagas])
}
