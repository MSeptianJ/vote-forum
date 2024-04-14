import { COMMENT_ACTION_TYPE } from './action';

function commentsReducer(comments = [], action = {}) {
  switch (action.type) {
    case COMMENT_ACTION_TYPE.ADD:
      return [action.payload.comment, ...comments];
    case COMMENT_ACTION_TYPE.UPVOTE:
      return comments.map((comment) => {
        const { commentId, userId } = action.payload;

        if (comment.id === commentId) {
          return {
            ...comment,
            upVotesBy: comment.upVotesBy.includes(userId)
              ? comment.upVotesBy
              : comment.upVotesBy.concat([userId]),
            downVotesBy: comment.downVotesBy.includes(userId)
              ? comment.downVotesBy.filter((id) => id !== userId)
              : comment.downVotesBy,
          };
        }

        return comment;
      });
    case COMMENT_ACTION_TYPE.DOWNVOTE:
      return comments.map((comment) => {
        const { commentId, userId } = action.payload;

        if (comment.id === commentId) {
          return {
            ...comment,
            upVotesBy: comment.upVotesBy.includes(userId)
              ? comment.upVotesBy.filter((id) => id !== userId)
              : comment.upVotesBy,
            downVotesBy: comment.downVotesBy.includes(userId)
              ? comment.downVotesBy
              : comment.downVotesBy.concat([userId]),
          };
        }

        return comment;
      });
    default:
      return comments;
  }
}

export default commentsReducer;
