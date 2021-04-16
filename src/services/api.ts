import { getCookie } from 'utils'
import axios, { Method } from 'axios'

interface AxiosParams {
  method?: Method
  url?: string
  data?: Record<string, unknown>
}

const instance = axios.create({
  baseURL: 'https://url', // TODO: need to add API url
})

// eslint-disable-next-line
export const createApiCall = async ({ method = 'GET', url = '', data = {} }: AxiosParams) => {
  const headers: any = {
    'Content-Type': 'application/json',
    cache: 'no-cache',
  }

  const authToken = getCookie('token')
  if (authToken) {
    headers.Authorization = authToken
  }

  return instance
    .request({
      method,
      url,
      data,
      headers,
    })
    .then(response => response)
}
