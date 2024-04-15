import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  createThread, getAllThreads, toggleDownVoteThread,
  toggleUpVoteThread,
} from '../../utils/api';

export const THREAD_ACTION_TYPE = {
  RECEIVE: 'thread/RECEIVE',
  ADD: 'thread/ADD',
  UPVOTE: 'thread/UPVOTE',
  DOWNVOTE: 'thread/DOWNVOTE',
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
  dispatch(showLoading());

  try {
    const threads = await getAllThreads();
    dispatch(receiveThreadsAction(threads));
  } catch (error) {
    dispatch(hideLoading());
    throw new Error(error);
  }

  dispatch(hideLoading());
};

export const asyncAddThread = ({ title, body, category = 'general' }) => async (dispatch) => {
  dispatch(showLoading());

  try {
    const thread = await createThread({ title, body, category });
    dispatch(addThreadAction(thread));
  } catch (error) {
    dispatch(hideLoading());
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
    dispatch(hideLoading());
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
    dispatch(hideLoading());
    throw new Error(error);
  }

  dispatch(hideLoading());
};
