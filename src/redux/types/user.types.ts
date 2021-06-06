  export interface Meta {
    dateCreated: string
  }
  
  export interface Feature {
    id: number
    type: string
    institutionId?: number
    settings?: string
    updatedAt?: string
  }
  
  export interface UserState {
    firstName: string
    lastName: string
    email: string
    meta: Meta
    accountId: string
  }
  
  export const SET_USER = 'SET_USER'
  
  interface SetUser {
    type: typeof SET_USER
    payload: UserState
  }
  
  export type UserActionType = SetUser