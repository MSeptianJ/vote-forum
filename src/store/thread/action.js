import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  createThread, getAllThreads, toggleDownVoteThread,
  toggleUpVoteThread,
} from '../../utils/api';

export const THREAD_ACTION_TYPE = {
  RECEIVE: 'RECEIVE_THREADS',
  ADD: 'ADD_THREAD',
  UPVOTE: 'UPVOTE_THREAD',
  DOWNVOTE: 'DOWNVOTE_THREAD',
};

export const receiveThreadsAction = (threads) => ({
  type: THREAD_ACTION_TYPE.RECEIVE,
  payload: {
    threads,
  },
});

export const addThreadAction = (thread) => ({
  type: THREAD_ACTION_TYPE.ADD,
  payload: {
    thread,
  },
});

export const upVoteThreadAction = ({ threadId, userId }) => ({
  type: THREAD_ACTION_TYPE.UPVOTE,
  payload: {
    threadId,
    userId,
  },
});

export const downVoteThreadAction = ({ threadId, userId }) => ({
  type: THREAD_ACTION_TYPE.DOWNVOTE,
  payload: {
    threadId,
    userId,
  },
});

export const asyncGetThreads = () => async (dispatch) => {
  try {
    const threads = await getAllThreads();
    dispatch(receiveThreadsAction(threads));
  } catch (error) {
    throw new Error(error);
  }
};

export const asyncAddThread = ({ title, body, category = 'general' }) => async (dispatch) => {
  dispatch(showLoading());

  try {
    const thread = await createThread({ title, body, category });
    dispatch(addThreadAction(thread));
  } catch (error) {
    throw new Error(error);
  }

  dispatch(hideLoading());
};

export const asyncUpVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(showLoading());
  dispatch(upVoteThreadAction({ threadId, userId: authUser.id }));

  try {
    await toggleUpVoteThread(threadId);
  } catch (error) {
    await toggleUpVoteThread(threadId);
    throw new Error(error);
  }

  dispatch(hideLoading());
};

export const asyncDownVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(showLoading());
  dispatch(downVoteThreadAction({ threadId, userId: authUser.id }));

  try {
    await toggleDownVoteThread(threadId);
  } catch (error) {
    await toggleDownVoteThread(threadId);
  }

  dispatch(hideLoading());
};
