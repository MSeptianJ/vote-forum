import { describe, expect, it } from 'vitest';
import { THREAD_ACTION_TYPE } from '../../thread/action';
import threadsReducer from '../../thread/reducer';

// Test Threads Reducer
// - TYPE UNKNOWN: Should return initial state
// - TYPE RECEIVE: Should return threads
// - TYPE ADD: Should return threads with new thread
// - TYPE UPVOTE: Should return threads with new userId in upVotesBy
// - TYPE DOWNVOTE: Should return threads with new userId in downVotesBy
// - TYPE NEUTRALVOTE: Should return threads with userId erased in upVotesBy or downVotesBy

describe('REDUCER: Thread', () => {
  it('TYPE UNKNOWN: Should return initial state', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('TYPE RECEIVE: Should return threads', () => {
    const initialState = [];
    const action = {
      type: THREAD_ACTION_TYPE.RECEIVE,
      payload: {
        threads: [
          {
            id: 'thread-Np47p4jhUXYhrhRn',
            title: 'Bagaimana pengalamanmu belajar Redux?',
            body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
            category: 'redux',
            createdAt: '2023-05-29T07:55:52.266Z',
            ownerId: 'user-mQhLzINW_w5TxxYf',
            totalComments: 2,
            upVotesBy: [],
            downVotesBy: [
              'user-5d25rHmwh6xpC0G8',
            ],
          },
          {
            id: 'thread-91KocEqYPRz68MhD',
            title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu',
            body: 'Hallo',
            category: 'perkenalan',
            createdAt: '2023-05-29T07:54:35.746Z',
            ownerId: 'user-aROWej8yYA1sOfHN',
            totalComments: 9,
            upVotesBy: [
              'user-mQhLzINW_w5TxxYf',
              'user-5d25rHmwh6xpC0G8',
            ],
            downVotesBy: [],
          },
        ],
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threads);
  });

  it('TYPE ADD: Should return threads with new thread', () => {
    const initialState = [
      {
        id: 'thread-Np47p4jhUXYhrhRn',
        title: 'Bagaimana pengalamanmu belajar Redux?',
        body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
        category: 'redux',
        createdAt: '2023-05-29T07:55:52.266Z',
        ownerId: 'user-mQhLzINW_w5TxxYf',
        totalComments: 2,
        upVotesBy: [],
        downVotesBy: [
          'user-5d25rHmwh6xpC0G8',
        ],
      },
      {
        id: 'thread-91KocEqYPRz68MhD',
        title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu',
        body: 'Hallo',
        category: 'perkenalan',
        createdAt: '2023-05-29T07:54:35.746Z',
        ownerId: 'user-aROWej8yYA1sOfHN',
        totalComments: 9,
        upVotesBy: [
          'user-mQhLzINW_w5TxxYf',
          'user-5d25rHmwh6xpC0G8',
        ],
        downVotesBy: [],
      },
    ];
    const action = {
      type: THREAD_ACTION_TYPE.ADD,
      payload: {
        thread: {
          id: 'thread-knvaorbreove',
          title: 'tesbt-123',
          body: 'lorem ipsum, ha hi hu he ho',
          category: 'test',
          createdAt: '2023-05-29T07:55:52.266Z',
          ownerId: 'user-mQhLzINW_w5TxxYf',
          totalComments: 2,
          upVotesBy: [],
          downVotesBy: [
            'user-5d25rHmwh6xpC0G8',
          ],
        },
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('TYPE UPVOTE: Should return thread with new userId in upVotesBy', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Bagaimana pengalamanmu belajar Redux?',
        body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
        category: 'redux',
        createdAt: '2023-05-29T07:55:52.266Z',
        ownerId: 'user-mQhLzINW_w5TxxYf',
        totalComments: 2,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: THREAD_ACTION_TYPE.UPVOTE,
      payload: {
        threadId: 'thread-1',
        userId: 'users-2',
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('TYPE DOWNVOTE: Should return thread with new userId in downVotesBy', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Bagaimana pengalamanmu belajar Redux?',
        body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
        category: 'redux',
        createdAt: '2023-05-29T07:55:52.266Z',
        ownerId: 'user-mQhLzINW_w5TxxYf',
        totalComments: 2,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: THREAD_ACTION_TYPE.DOWNVOTE,
      payload: {
        threadId: 'thread-1',
        userId: 'users-2',
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('TYPE NEUTRALVOTE: Should return thread with userId erased in upVotesBy or downVotesBy', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Bagaimana pengalamanmu belajar Redux?',
        body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
        category: 'redux',
        createdAt: '2023-05-29T07:55:52.266Z',
        ownerId: 'user-mQhLzINW_w5TxxYf',
        totalComments: 2,
        upVotesBy: ['users-2'],
        downVotesBy: [],
      },
      {
        id: 'thread-2',
        title: 'Bagaimana pengalamanmu belajar Redux?',
        body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
        category: 'redux',
        createdAt: '2023-05-29T07:55:52.266Z',
        ownerId: 'user-mQhLzINW_w5TxxYf',
        totalComments: 2,
        upVotesBy: [],
        downVotesBy: ['users-2'],
      },
    ];
    const actionA = {
      type: THREAD_ACTION_TYPE.NEUTRALVOTE,
      payload: {
        threadId: 'thread-1',
        userId: 'users-2',
      },
    };
    const actionB = {
      type: THREAD_ACTION_TYPE.NEUTRALVOTE,
      payload: {
        threadId: 'thread-2',
        userId: 'users-2',
      },
    };

    const nextStateA = threadsReducer(initialState, actionA);
    const nextStateB = threadsReducer(initialState, actionB);

    expect(nextStateA).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
      },
      {
        ...initialState[1],
      },
    ]);
    expect(nextStateB).toEqual([
      {
        ...initialState[0],
      },
      {
        ...initialState[1],
        downVotesBy: [],
      },
    ]);
  });
});
