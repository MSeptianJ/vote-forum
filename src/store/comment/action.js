import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  createComment, getThreadDetail, toggleDownVoteComment, toggleUpVoteComment,
} from '../../utils/api';
import { receiveThreadDetailAction } from '../threadDetail/action';

export const COMMENT_ACTION_TYPE = {
  ADD: 'ADD_COMMENT',
  UPVOTE: 'UPVOTE_COMMENT',
  DOWNVOTE: 'DOWNVOTE_COMMENT',
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

export const asyncAddComment = (content) => async (dispatch, getState) => {
  dispatch(showLoading());

  const { threadDetail } = getState();

  try {
    const comment = await createComment({ threadId: threadDetail.id, content });
    dispatch(addCommentAction(comment));

    const newThreadDetail = await getThreadDetail(threadDetail.id);
    dispatch(receiveThreadDetailAction(newThreadDetail));
  } catch (error) {
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
    throw new Error(error);
  }

  dispatch(hideLoading());
};
