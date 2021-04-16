import * as AuthenticationActions from './authentication/actions'
import * as CommonActions from './common/actions'

export const ActionCreators = { ...AuthenticationActions, ...CommonActions }
