import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { getOwnProfile } from '../../utils/api';
import { setAuthUserAction } from '../auth-user/action';

export const IS_PRELOAD_ACTION_TYPE = {
  SET: 'SET_IS_PRELOAD',
};

export const setIsPreloadActionCreator = (isPreload) => ({
  type: IS_PRELOAD_ACTION_TYPE.SET,
  payload: {
    isPreload,
  },
});

export const asyncPreloadProcess = () => async (dispatch) => {
  dispatch(showLoading());

  try {
    const authUser = await getOwnProfile();
    dispatch(setAuthUserAction(authUser));
  } catch (error) {
    dispatch(setAuthUserAction(null));
  } finally {
    dispatch(setIsPreloadActionCreator(false));
  }

  dispatch(hideLoading());
};
