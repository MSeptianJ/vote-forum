import { describe, expect, it } from 'vitest';
import { USER_ACTION_TYPE } from '../../user/action';
import usersReducer from '../../user/reducer';

// Test User Reducer
// - TYPE UNKNOWN: Should return initial state
// - TYPE RECEIVE: Should return Users

describe('REDUCER: User', () => {
  it('TYPE UNKNOWN: Should return initial state', () => {
    const initialState = [];
    const action = {
      type: 'UNKNOWN',
    };

    const nextState = usersReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('TYPE RECEIVE: Should return Users', () => {
    const initialState = [];
    const action = {
      type: USER_ACTION_TYPE.RECEIVE,
      payload: {
        users: [
          {
            id: 'john_doe',
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
          {
            id: 'jane_doe',
            name: 'Jane Doe',
            email: 'jane@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
          {
            id: 'fulan',
            name: 'Si Fulan',
            email: 'fulan@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
        ],
      },
    };

    const nextState = usersReducer(initialState, action);
    expect(nextState).toEqual(action.payload.users);
  });
});
