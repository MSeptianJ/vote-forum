import { getAllUsers } from '../../utils/api';

export const USERS_ACTION_TYPE = {
  RECEIVE: 'RECEIVE_USERS',
};

export const receiveUsersAction = (users) => ({
  type: USERS_ACTION_TYPE.RECEIVE,
  payload: {
    users,
  },
});

export const asyncGetUsers = () => async (dispatch) => {
  try {
    const users = await getAllUsers();
    dispatch(receiveUsersAction(users));
  } catch (error) {
    throw new Error(error);
  }
};
