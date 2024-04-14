import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { getAllThreads, getAllUsers } from '../../utils/api';
import { receiveThreadsAction } from '../thread/action';
import { receiveUsersAction } from '../user/action';

const asyncGetUsersAndThreads = () => async (dispatch) => {
  dispatch(showLoading());

  try {
    const users = await getAllUsers();
    const threads = await getAllThreads();

    dispatch(receiveUsersAction(users));
    dispatch(receiveThreadsAction(threads));
  } catch (error) {
    dispatch(hideLoading());
    throw new Error(error);
  }

  dispatch(hideLoading());
};

export default asyncGetUsersAndThreads;
