import { describe, expect, it } from 'vitest';
import { COMMENT_ACTION_TYPE } from '../../comment/action';
import commentsReducer from '../../comment/reducer';

// Test Comment Reducer
// - TYPE UNKNOWN: Should return initial state
// - TYPE ADD: Should return comments with new comment
// - TYPE UPVOTE: Should return comment with new userId in upVotesBy
// - TYPE DOWNVOTE: Should return comment with new userId in downVotesBy
// - TYPE NEUTRALVOTE: Should return comment with userId erased in upVotesBy or downVotesBy

describe('REDUCER: Comment', () => {
  it('TYPE UNKNOWN: Should return initial state', () => {
    const initialState = {};
    const action = {
      type: 'UNKNOWN',
    };

    const nextState = commentsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('TYPE ADD: Should return comments with new comment', () => {
    const initialState = [];
    const action = {
      type: COMMENT_ACTION_TYPE.ADD,
      payload: {
        comment: {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com',
          },
        },
      },
    };

    const nextState = commentsReducer(initialState, action);

    expect(nextState).toEqual([...initialState, action.payload.comment]);
  });

  it('TYPE UPVOTE: Should return comment with new userId in upVotesBy', () => {
    const initialState = [
      {
        id: 'comment-1',
        content: 'Ini adalah komentar pertama',
        createdAt: '2021-06-21T07:00:00.000Z',
        upVotesBy: [],
        downVotesBy: [],
        owner: {
          id: 'users-1',
          name: 'John Doe',
          email: 'john@example.com',
        },
      },
    ];

    const action = {
      type: COMMENT_ACTION_TYPE.UPVOTE,
      payload: {
        commentId: 'comment-1',
        userId: 'users-2',
      },
    };

    const nextState = commentsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('TYPE DOWNVOTE: Should return comment with new userId in downVotesBy', () => {
    const initialState = [
      {
        id: 'comment-1',
        content: 'Ini adalah komentar pertama',
        createdAt: '2021-06-21T07:00:00.000Z',
        upVotesBy: [],
        downVotesBy: [],
        owner: {
          id: 'users-1',
          name: 'John Doe',
          email: 'john@example.com',
        },
      },
    ];

    const action = {
      type: COMMENT_ACTION_TYPE.DOWNVOTE,
      payload: {
        commentId: 'comment-1',
        userId: 'users-2',
      },
    };

    const nextState = commentsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('TYPE NEUTRALVOTE: Should return comment with userId erased in upVotesBy or downVotesBy', () => {
    const initialState = [
      {
        id: 'comment-1',
        content: 'Ini adalah komentar pertama',
        createdAt: '2021-06-21T07:00:00.000Z',
        upVotesBy: ['users-2'],
        downVotesBy: [],
        owner: {
          id: 'users-1',
          name: 'John Doe',
          email: 'john@example.com',
        },
      },
      {
        id: 'comment-2',
        content: 'Ini adalah komentar pertama',
        createdAt: '2021-06-21T07:00:00.000Z',
        upVotesBy: [],
        downVotesBy: ['users-2'],
        owner: {
          id: 'users-1',
          name: 'John Doe',
          email: 'john@example.com',
        },
      },
    ];

    const actionA = {
      type: COMMENT_ACTION_TYPE.NEUTRALVOTE,
      payload: {
        commentId: 'comment-1',
        userId: 'users-2',
      },
    };
    const actionB = {
      type: COMMENT_ACTION_TYPE.NEUTRALVOTE,
      payload: {
        commentId: 'comment-2',
        userId: 'users-2',
      },
    };

    const nextStateA = commentsReducer(initialState, actionA);
    const nextStateB = commentsReducer(initialState, actionB);

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
