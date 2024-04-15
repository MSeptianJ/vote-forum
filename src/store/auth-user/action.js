import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  getOwnProfile, login, putAccessToken, register,
} from '../../utils/api';

export const AUTH_USER_ACTION_TYPE = {
  SET: 'auth-user/SET',
  UNSET: 'auth-user/UNSET',
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

export const asyncRegisterUser = ({ name, email, password }) => async (dispatch) => {
  dispatch(showLoading());

  try {
    await register({ name, email, password });
  } catch (error) {
    dispatch(hideLoading());
    throw new Error(error);
  }

  dispatch(hideLoading());
};

export const asyncLoginUser = ({ email, password }) => async (dispatch) => {
  dispatch(showLoading());

  try {
    const token = await login({ email, password });
    putAccessToken(token);

    const authUser = await getOwnProfile();
    dispatch(setAuthUserAction(authUser));
  } catch (error) {
    dispatch(hideLoading());
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
    dispatch(hideLoading());
    throw new Error(error);
  }

  dispatch(hideLoading());
};
