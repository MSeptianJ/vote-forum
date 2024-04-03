import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  getOwnProfile, login, putAccessToken, register,
} from '../../utils/api';

export const AUTH_USER_ACTION_TYPE = {
  SET: 'SET_AUTH_USER',
  UNSET: 'UNSET_AUTH_USER',
};

export const setAuthUserAction = (authUser) => ({
  type: AUTH_USER_ACTION_TYPE.SET,
  payload: {
    authUser,
  },
});

export const unsetAuthUserAction = () => ({
  type: AUTH_USER_ACTION_TYPE.UNSET,
  payload: {},
});

export const asyncRegisterUser = ({ name, email, password }) => async () => {
  try {
    await register({ name, email, password });
  } catch (error) {
    throw new Error(error);
  }
};

export const asyncLoginUser = ({ email, password }) => async (dispatch) => {
  dispatch(showLoading());

  try {
    const token = await login({ email, password });
    putAccessToken(token);
    const authUser = await getOwnProfile();
    dispatch(setAuthUserAction(authUser));
  } catch (error) {
    throw new Error(error);
  }

  dispatch(hideLoading());
};

export const asyncLogoutUser = () => async (dispatch) => {
  dispatch(showLoading());

  try {
    dispatch(unsetAuthUserAction());
    putAccessToken('');
  } catch (error) {
    throw new Error(error);
  }

  dispatch(hideLoading());
};
