import { describe, expect, it } from 'vitest';
import { AUTH_USER_ACTION_TYPE } from '../../auth-user/action';
import authUserReducer from '../../auth-user/reducer';

describe('REDUCER: Auth', () => {
  it('TYPE UNKNOWN: Should return initialstate', () => {
    const initialState = '';
    const action = {
      type: 'UNKNOWN',
    };

    const nextState = authUserReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('TYPE SET: Should set new Auth User', () => {
    const initialState = '';
    const action = {
      type: AUTH_USER_ACTION_TYPE.SET,
      payload: {
        authUser: {
          id: 1,
          name: 'test',
          avatar: 'https:/generate-test',
          email: 'test@gmail.com',
        },
      },
    };

    const nextState = authUserReducer(initialState, action);

    expect(nextState).toEqual(action.payload.authUser);
  });

  it('TYPE UNSET: Should unset Auth User', () => {
    const initialState = {
      id: 1,
      name: 'test',
      avatar: 'https:/generate-test',
      email: 'test@gmail.com',
    };
    const action = {
      type: AUTH_USER_ACTION_TYPE.UNSET,
    };

    const nextState = authUserReducer(initialState, action);

    expect(nextState).toBeNull();
  });
});
