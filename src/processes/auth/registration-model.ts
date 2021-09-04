import { createEffect } from 'effector'
import { UserInterface, MockData } from './login-model'
import { historyPush } from '../../shared/services/navigation'

export const $registerationNewUser = createEffect(async (user: UserInterface) => {
  MockData.push(user)
  historyPush('/login')
})
