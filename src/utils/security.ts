const USER_TOKEN = '@user-token'
const USER_DATA = '@user-data'

export const setLocalToken = (token: string) => window.localStorage.setItem(USER_TOKEN, token)

export const getLocaltoken = () => window.localStorage.getItem(USER_TOKEN)

export const setLocalUser = (user: any) =>
  window.localStorage.setItem(USER_DATA, JSON.stringify(user))

export const getLocalUser = () => {
  const data = window.localStorage.getItem(USER_DATA)
  if (data) return JSON.parse(data)
  return
}

export const logout = () => {
  window.localStorage.removeItem(USER_TOKEN)
  window.localStorage.removeItem(USER_DATA)
}
