import { IS_PRELOAD_ACTION_TYPE } from './action';

function isPreloadReducer(isPreload = true, action = {}) {
  switch (action.type) {
    case IS_PRELOAD_ACTION_TYPE.SET:
      return action.payload.isPreload;
    default:
      return isPreload;
  }
}

export default isPreloadReducer;
