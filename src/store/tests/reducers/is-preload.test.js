import { describe, expect, it } from 'vitest';
import { IS_PRELOAD_ACTION_TYPE } from '../../isPreload/action';
import isPreloadReducer from '../../isPreload/reducer';

// Test Is Preload Reducer
// - TYPE UNKNOWN: Should return initial state
// - TYPE SET: Should set Is Preload to False

describe('REDUCER: isPreload', () => {
  it('TYPE UNKNOWN: Should return initial state', () => {
    const initialState = false;
    const action = {
      type: 'UNKNOWN',
    };

    const nextState = isPreloadReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('TYPE SET: Shoul set isPreload to False', () => {
    const initialState = true;
    const action = {
      type: IS_PRELOAD_ACTION_TYPE.SET,
      payload: {
        isPreload: false,
      },
    };

    const nextState = isPreloadReducer(initialState, action);

    expect(nextState).toBeFalsy();
  });
});
