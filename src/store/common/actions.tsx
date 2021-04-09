import { commonDataType, ActionType } from './model'

export const changeLangAction = (payload: commonDataType): any => ({
  type: ActionType.CHANGE_LANG,
  payload,
})
