import axios from 'axios'

import { config } from '../config'
import { getLocaltoken, logout } from './security'

export const API_URL = config.apiUrl

type OPTIONS = {
  baseURL: string
  headers: {
    'Content-Type': string
    Authorization?: string
  }
}

const fetch = () => {
  const defaultOptions = <OPTIONS>{
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const instance = axios.create(defaultOptions)

  instance.interceptors.request.use((response: any) => {
    const token = getLocaltoken()
    response.headers.Authorization = token ? `Bearer ${token}` : ''
    return response
  })

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error) logout()

      const { status } = error.response
      if (status && status === 401) logout()

      return error
    }
  )

  return instance
}

export default fetch()
