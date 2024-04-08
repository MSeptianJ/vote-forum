import { getAllThreads, getAllUsers } from '../../utils/api';
import { receiveThreadsAction } from '../thread/action';
import { receiveUsersAction } from '../user/action';

const asyncGetUsersAndThreads = () => async (dispatch) => {
  try {
    const users = await getAllUsers();
    const threads = await getAllThreads();

    dispatch(receiveUsersAction(users));
    dispatch(receiveThreadsAction(threads));
  } catch (error) {
    throw new Error(error);
  }
};

export default asyncGetUsersAndThreads;
