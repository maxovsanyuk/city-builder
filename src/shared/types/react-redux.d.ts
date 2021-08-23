import 'react-redux'

import { RootState } from 'shared/store/rootReducer'

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
