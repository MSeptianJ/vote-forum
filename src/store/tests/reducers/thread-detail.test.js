import { describe, expect, it } from 'vitest';
import { THREAD_DETAIL_ACTION_TYPE } from '../../threadDetail/action';
import threadDetailReducer from '../../threadDetail/reducer';

// Test Thread Detail Reducer
// - TYPE UNKNOWN: Should return initial state
// - TYPE RECEIVE: Should return single thread information
// - TYPE CLEAR: Should return null
// - TYPE UPVOTE: Should return thread-detail with new userId in upVotesBy
// - TYPE DOWNVOTE: Should return thread-detail with new userId in downVotesBy
// - TYPE NEUTRALVOTE: Should return thread-detail with userId erased in upVotesBy or downVotesBy

describe('REDUCER: Thread Detail', () => {
  it('TYPE UNKNOWN: Should return initial state', () => {
    const initialState = {};
    const action = {
      type: 'UNKNOWN',
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('TYPE RECEIVE: Should return single thread information', () => {
    const initialState = {};
    const action = {
      type: THREAD_DETAIL_ACTION_TYPE.RECEIVE,
      payload: {
        detailThread: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('TYPE CLEAR: Should return null', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: THREAD_DETAIL_ACTION_TYPE.CLEAR,
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toBeNull();
  });

  it('TYPE UPVOTE: Should return thread with new userId in upVotesBy', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: THREAD_DETAIL_ACTION_TYPE.UPVOTE,
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId],
    });
  });

  it('TYPE DOWNVOTE: Should return thread with new userId in downVotesBy', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: THREAD_DETAIL_ACTION_TYPE.DOWNVOTE,
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      downVotesBy: [action.payload.userId],
    });
  });

  it('TYPE NEUTRALVOTE: Should return thread with userId erased in upVotesBy or downVotesBy', () => {
    const initialStateA = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: ['users-1'],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const initialStateB = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: ['users-2'],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const actionA = {
      type: THREAD_DETAIL_ACTION_TYPE.NEUTRALVOTE,
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };
    const actionB = {
      type: THREAD_DETAIL_ACTION_TYPE.NEUTRALVOTE,
      payload: {
        threadId: 'thread-1',
        userId: 'users-2',
      },
    };

    const nextStateA = threadDetailReducer(initialStateA, actionA);
    const nextStateB = threadDetailReducer(initialStateB, actionB);

    expect(nextStateA).toEqual({
      ...initialStateA,
      upVotesBy: [],
    });
    expect(nextStateB).toEqual({
      ...initialStateB,
      downVotesBy: [],
    });
  });
});
