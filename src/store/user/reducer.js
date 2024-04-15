import { USER_ACTION_TYPE } from './action';

function usersReducer(users = [], action = {}) {
  switch (action.type) {
    case USER_ACTION_TYPE.RECEIVE:
      return action.payload.users;
    default:
      return users;
  }
}

export default usersReducer;
