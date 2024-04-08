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
  const { threadDetail } = getState();

  try {
    const comment = createComment(content);
    dispatch(addCommentAction(comment));

    const newThreadDetail = await getThreadDetail(threadDetail.id);
    dispatch(receiveThreadDetailAction(newThreadDetail));
  } catch (error) {
    throw new Error(error);
  }
};

export const asyncUpVoteComment = (commentId) => async (dispatch, getState) => {
  const { threadDetail, authUser } = getState();
  dispatch(upVoteCommentAction({ commentId, userId: authUser.id }));

  try {
    await toggleUpVoteComment(commentId);

    const newThreadDetail = await getThreadDetail(threadDetail.id);
    dispatch(receiveThreadDetailAction(newThreadDetail));
  } catch (error) {
    throw new Error(error);
  }
};

export const asyncDownVoteComment = (commentId) => async (dispatch, getState) => {
  const { threadDetail, authUser } = getState();
  dispatch(downVoteCommentAction({ commentId, userId: authUser.id }));

  try {
    await toggleDownVoteComment(commentId);

    const newThreadDetail = await getThreadDetail(threadDetail.id);
    dispatch(receiveThreadDetailAction(newThreadDetail));
  } catch (error) {
    throw new Error(error);
  }
};