import { message } from 'antd'
import { persist } from 'effector-storage/local'
import { createEvent, createStore } from 'effector-root'
import { historyPush } from '../../shared/services/navigation'
import { setCookie, removeCookie } from '../../shared/lib/utils'

export const MockData = [
  {
    email: 'maks@si-ab.com',
    token: 'JWT_TOKEN',
    password: '1aD@test@Maks14',
    firstName: 'Maksym',
    surname: 'Ovsianiuk',
    authorizationType: 'admin',
    location: 'Warsaw, Poland',
  },
  {
    email: 'maksovsanyuk@gmail.com',
    token: 'JWT_TOKEN',
    password: 'Aperefa1234!',
    firstName: 'Maksym',
    surname: 'Ovsianiuk',
    authorizationType: 'admin',
    location: 'Warsaw, Poland',
  },
  {
    email: 'maks@si-ab.com',
    token: 'JWT_TOKEN',
    password: '1aD@test@Maks14',
    firstName: 'Maksym',
    surname: 'Ovsianiuk',
    authorizationType: 'admin',
    location: 'Warsaw, Poland',
  },
]

export interface UserInterface {
  email: string
  token: string
  password: string
  firstName: string
  surname: string
  authorizationType: string
  location: string
}

export const $loginUser = createEvent<{ email: string; password: string }>()
export const $setUser = createEvent<UserInterface>()
export const $logoutUser = createEvent()

export const $user = createStore<UserInterface | null>(null)
persist({ store: $user, key: 'USER' })

$user
  .on($loginUser, (_, payload) => {
    const user = MockData.find((user: UserInterface) => user?.email === payload?.email)

    if (user) {
      setCookie('token', user?.token)
      $setUser(user)
      message.success('Success login!')
      historyPush('/')
    } else {
      message.error('User password or login is wrong!')
    }
  })
  .on($setUser, (_, payload) => payload)
  .on($logoutUser, () => {
    removeCookie('token')
    return null
  })
