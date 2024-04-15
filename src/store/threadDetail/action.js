import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  getThreadDetail,
  toggleDownVoteThread,
  toggleNeutralVoteThread,
  toggleUpVoteThread,
} from '../../utils/api';

export const THREAD_DETAIL_ACTION_TYPE = {
  RECEIVE: 'thread-detail/RECEIVE',
  CLEAR: 'thread-detail/CLEAR',
  UPVOTE: 'thread-detail/UPVOTE',
  DOWNVOTE: 'thread-detail/DOWNVOTE',
  NEUTRALVOTE: 'thread-detail/NEUTRAL',
};

export const receiveThreadDetailAction = (threadDetail) => ({
  type: THREAD_DETAIL_ACTION_TYPE.RECEIVE,
  payload: {
    threadDetail,
  },
});

export const clearThreadDetailAction = () => ({
  type: THREAD_DETAIL_ACTION_TYPE.CLEAR,
});

export const upVoteThreadDetailAction = ({ threadId, userId }) => ({
  type: THREAD_DETAIL_ACTION_TYPE.UPVOTE,
  payload: {
    threadId,
    userId,
  },
});

export const downVoteThreadDetailAction = ({ threadId, userId }) => ({
  type: THREAD_DETAIL_ACTION_TYPE.DOWNVOTE,
  payload: {
    threadId,
    userId,
  },
});

export const neutralVoteThreadDetailAction = ({ threadId, userId }) => ({
  type: THREAD_DETAIL_ACTION_TYPE.NEUTRALVOTE,
  payload: {
    threadId,
    userId,
  },
});

export const asyncGetThreadDetail = (threadId) => async (dispatch) => {
  dispatch(showLoading());
  dispatch(clearThreadDetailAction());

  try {
    const threadDetail = await getThreadDetail(threadId);
    dispatch(receiveThreadDetailAction(threadDetail));
  } catch (error) {
    dispatch(hideLoading());
    throw new Error(error);
  }

  dispatch(hideLoading());
};

export const asyncUpVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(showLoading());
  dispatch(upVoteThreadDetailAction({ threadId, userId: authUser.id }));

  try {
    await toggleUpVoteThread(threadId);
  } catch (error) {
    dispatch(hideLoading());
    throw new Error(error);
  }

  dispatch(hideLoading());
};

export const asyncDownVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(showLoading());
  dispatch(downVoteThreadDetailAction({ threadId, userId: authUser.id }));

  try {
    await toggleDownVoteThread(threadId);
  } catch (error) {
    dispatch(hideLoading());
    throw new Error(error);
  }

  dispatch(hideLoading());
};

export const asyncNeutralVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(showLoading());
  dispatch(neutralVoteThreadDetailAction({ threadId, userId: authUser.id }));

  try {
    await toggleNeutralVoteThread(threadId);
  } catch (error) {
    dispatch(hideLoading());
    throw new Error(error);
  }

  dispatch(hideLoading());
};
