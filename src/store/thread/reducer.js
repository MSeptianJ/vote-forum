import { THREAD_ACTION_TYPE } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case THREAD_ACTION_TYPE.RECEIVE:
      return action.payload.threads;
    case THREAD_ACTION_TYPE.ADD:
      return [action.payload.thread, ...threads];
    case THREAD_ACTION_TYPE.UPVOTE:
      return threads.map((thread) => {
        const { threadId, userId } = action.payload;

        if (thread.id === threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(userId)
              ? thread.upVotesBy
              : thread.upVotesBy.concat(userId),
            downVotesBy: thread.downVotesBy.includes(userId)
              ? thread.downVotesBy.filter((id) => id !== userId)
              : thread.downVotesBy,
          };
        }

        return thread;
      });
    case THREAD_ACTION_TYPE.DOWNVOTE:
      return threads.map((thread) => {
        const { threadId, userId } = action.payload;

        if (thread.id === threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(userId)
              ? thread.upVotesBy.filter((id) => id !== userId)
              : thread.upVotesBy,
            downVotesBy: thread.downVotesBy.includes(userId)
              ? thread.downVotesBy
              : thread.downVotesBy.concat(userId),
          };
        }

        return thread;
      });
    default:
      return threads;
  }
}

export default threadsReducer;
