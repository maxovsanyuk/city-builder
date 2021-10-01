import { createEffect } from 'effector'
import { UserInterface, MockData } from './login-model'
import { historyPush } from '../../services/navigation'

export const $registerationNewUser = createEffect(async (user: UserInterface) => {
  MockData.push(user)
  historyPush('/city-builder/login')
})
