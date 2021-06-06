import { UserState } from 'redux/types/user.types'

const defaultState: UserState = {
  firstName: '',
  lastName: '',
  email: '',
  meta: {
    dateCreated: '',
  },
  accountId: '',
}

export default defaultState