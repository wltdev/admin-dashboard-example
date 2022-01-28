type State = {
  userToken: string
}

type Action = {
  type: string
  payload: string
}

const authReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        userToken: action.payload
      }
    case 'LOGGOUT':
      return { ...state, userToken: '' }
    default:
      return state
  }
}

export default authReducer
