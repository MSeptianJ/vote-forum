import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  createComment,
  getThreadDetail,
  toggleDownVoteComment,
  toggleNeutralVoteComment,
  toggleUpVoteComment,
} from '../../utils/api';
import { receiveThreadDetailAction } from '../threadDetail/action';

export const COMMENT_ACTION_TYPE = {
  ADD: 'comment/ADD',
  UPVOTE: 'comment/UPVOTE',
  DOWNVOTE: 'comment/DOWNVOTE',
  NEUTRALVOTE: 'comment/NEUTRAL',
};

export const addCommentAction = (comment) => ({
  type: COMMENT_ACTION_TYPE.ADD,
  payload: {
    comment,
  },
});

export const upVoteCommentAction = ({ commentId, userId }) => ({
  type: COMMENT_ACTION_TYPE.UPVOTE,
  payload: {
    commentId,
    userId,
  },
});

export const downVoteCommentAction = ({ commentId, userId }) => ({
  type: COMMENT_ACTION_TYPE.DOWNVOTE,
  payload: {
    commentId,
    userId,
  },
});

export const neutralVoteCommentAction = ({ commentId, userId }) => ({
  type: COMMENT_ACTION_TYPE.NEUTRALVOTE,
  payload: {
    commentId,
    userId,
  },
});

export const asyncAddComment = (content) => async (dispatch, getState) => {
  dispatch(showLoading());

  const { threadDetail } = getState();

  try {
    const comment = await createComment({ threadId: threadDetail.id, content });
    dispatch(addCommentAction(comment));

    const newThreadDetail = await getThreadDetail(threadDetail.id);
    dispatch(receiveThreadDetailAction(newThreadDetail));
  } catch (error) {
    dispatch(hideLoading());
    throw new Error(error);
  }

  dispatch(hideLoading());
};

export const asyncUpVoteComment = (commentId) => async (dispatch, getState) => {
  const { threadDetail, authUser } = getState();
  dispatch(showLoading());
  dispatch(upVoteCommentAction({ commentId, userId: authUser.id }));

  try {
    await toggleUpVoteComment(threadDetail.id, commentId);

    const newThreadDetail = await getThreadDetail(threadDetail.id);
    dispatch(receiveThreadDetailAction(newThreadDetail));
  } catch (error) {
    dispatch(hideLoading());
    throw new Error(error);
  }

  dispatch(hideLoading());
};

export const asyncDownVoteComment = (commentId) => async (dispatch, getState) => {
  const { threadDetail, authUser } = getState();
  dispatch(showLoading());
  dispatch(downVoteCommentAction({ commentId, userId: authUser.id }));

  try {
    await toggleDownVoteComment(threadDetail.id, commentId);

    const newThreadDetail = await getThreadDetail(threadDetail.id);
    dispatch(receiveThreadDetailAction(newThreadDetail));
  } catch (error) {
    dispatch(hideLoading());
    throw new Error(error);
  }

  dispatch(hideLoading());
};

export const asyncNeutralVoteComment = (commentId) => async (dispatch, getState) => {
  const { threadDetail, authUser } = getState();
  dispatch(showLoading());
  dispatch(neutralVoteCommentAction({ commentId, userId: authUser.id }));

  try {
    await toggleNeutralVoteComment(threadDetail.id, commentId);

    const newThreadDetail = await getThreadDetail(threadDetail.id);
    dispatch(receiveThreadDetailAction(newThreadDetail));
  } catch (error) {
    dispatch(hideLoading());
    throw new Error(error);
  }

  dispatch(hideLoading());
};
