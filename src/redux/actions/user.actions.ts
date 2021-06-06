import { UserState, SET_USER } from 'redux/types/user.types'

export const setUser = (user: UserState) => ({
  type: SET_USER,
  payload: user,
})