import { describe, expect, it } from 'vitest';
import { LEADERBOARD_ACTION_TYPE } from '../../leaderboard/action';
import leaderBoardsReducer from '../../leaderboard/reducer';

// Test Leaderboard Reducer
// - TYPE UNKNOWN: Should return initial state
// - TYPE RECEIVE: Should return Leaderboards

describe('REDUCER: Leaderboard', () => {
  it('TYPE UNKNOWN: Should return initial state', () => {
    const initialState = [];
    const action = {
      type: 'UNKNOWN',
    };

    const nextState = leaderBoardsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('TYPE RECEIVE: Should return LeaderBoards', () => {
    const initialState = [];
    const action = {
      type: LEADERBOARD_ACTION_TYPE.RECEIVE,
      payload: {
        leaderBoards: [
          {
            user: {
              id: 'users-1',
              name: 'John Doe',
              email: 'john@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 10,
          },
          {
            user: {
              id: 'users-2',
              name: 'Jane Doe',
              email: 'jane@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 5,
          },
        ],
      },
    };
    const nextState = leaderBoardsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.leaderBoards);
  });
});
