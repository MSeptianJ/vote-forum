import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { getAllUsers } from '../../utils/api';

export const USER_ACTION_TYPE = {
  RECEIVE: 'user/RECEIVE',
};

export const receiveUsersAction = (users) => ({
  type: USER_ACTION_TYPE.RECEIVE,
  payload: {
    users,
  },
});

export const asyncGetUsers = () => async (dispatch) => {
  dispatch(showLoading());

  try {
    const users = await getAllUsers();
    dispatch(receiveUsersAction(users));
  } catch (error) {
    dispatch(hideLoading());
    throw new Error(error);
  }

  dispatch(hideLoading());
};
