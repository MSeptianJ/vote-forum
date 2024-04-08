import { THREAD_DETAIL_ACTION_TYPE } from './action';

function threadDetailReducer(threadDetail = [], action = {}) {
  switch (action.type) {
    case THREAD_DETAIL_ACTION_TYPE.RECEIVE:
      return action.payload.threadDetail;
    case THREAD_DETAIL_ACTION_TYPE.CLEAR:
      return null;
    case THREAD_DETAIL_ACTION_TYPE.UPVOTE:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
          ? threadDetail.upVotesBy
          : threadDetail.upVotesBy.concat(action.payload.userId),
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
          ? threadDetail.downVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.downVotesBy,
      };
    case THREAD_DETAIL_ACTION_TYPE.DOWNVOTE:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
          ? threadDetail.upVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.upVotesBy,
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
          ? threadDetail.downVotesBy
          : threadDetail.downVotesBy.concat(action.payload.userId),
      };
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
