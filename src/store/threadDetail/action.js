import { getThreadDetail, toggleDownVoteThread, toggleUpVoteThread } from '../../utils/api';

export const THREAD_DETAIL_ACTION_TYPE = {
  RECEIVE: 'RECEIVE_THREAD_DETAIL',
  CLEAR: 'CLEAR_THREAD_DETAIL',
  UPVOTE: 'UPVOTE_THREAD_DETAIL',
  DOWNVOTE: 'DOWNVOTE_THREAD_DETAIL',
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

export const asyncGetThreadDetail = (threadId) => async (dispatch) => {
  dispatch(clearThreadDetailAction());

  try {
    const threadDetail = await getThreadDetail(threadId);
    dispatch(receiveThreadDetailAction(threadDetail));
  } catch (error) {
    throw new Error(error);
  }
};

export const asyncUpVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(upVoteThreadDetailAction({ threadId, userId: authUser.id }));

  try {
    await toggleUpVoteThread(threadId);
  } catch (error) {
    throw new Error(error);
  }
};

export const asyncDownVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(downVoteThreadDetailAction({ threadId, userId: authUser.id }));

  try {
    await toggleDownVoteThread(threadId);
  } catch (error) {
    throw new Error(error);
  }
};
