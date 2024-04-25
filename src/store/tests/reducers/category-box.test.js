import { describe, expect, it } from 'vitest';
import { CATEGORY_BOX_ACTION_TYPE } from '../../category-box/action';
import categoryBoxReducer from '../../category-box/reducer';

// Test Category Box Reducer
// - TYPE UNKNOWN: Should return initial state
// - TYPE TOGGLE: Should return opposite bool

describe('REDUCER: Category Box', () => {
  it('TYPE UNKNOWN: Should return initial state', () => {
    const initialState = false;
    const action = {
      type: 'UNKNOWN',
    };

    const nextState = categoryBoxReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('TYPE TOGGLE: Should return opposite bool', () => {
    const initialState = false;
    const action = {
      type: CATEGORY_BOX_ACTION_TYPE.TOGGLE,
    };

    const nextState = categoryBoxReducer(initialState, action);
    const nextStateB = categoryBoxReducer(nextState, action);

    expect(nextState).toBeTruthy();
    expect(nextStateB).toBeFalsy();
  });
});
