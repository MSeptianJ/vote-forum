import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  afterEach, describe, expect, it, vi,
} from 'vitest';
import {
  getOwnProfile, login, putAccessToken, register,
} from '../../../utils/api';
import {
  asyncLoginUser,
  asyncLogoutUser,
  asyncRegisterUser,
  setAuthUserAction,
  unsetAuthUserAction,
} from '../../auth-user/action';

// ACTION: Auth User
// - THUNK: asyncLoginUser, SUCCESS
// - THUNK: asyncLoginUser, FAILED
// - THUNK: asyncRegisterUser, SUCCESS
// - THUNK: asyncRegisterUser, FAILED
// - THUNK: asyncLogoutUser, SUCCESS

const fakeAuth = {
  id: 'john_doe',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeToken = {
  status: 'success',
  message: 'ok',
  data: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRpbWFzMiIsIm5hbWUiOiJEaW1hcyBTYXB1dHJhIiwicGhvdG8iOiJodHRwczovL3VpLWF2YXRhcnMuY29tL2FwaS8_bmFtZT1EaW1hcyBTYXB1dHJhJmJhY2tncm91bmQ9cmFuZG9tIiwiaXNfcGVybWFuZW50IjpmYWxzZSwiaWF0IjoxNjYzODQwNzY0fQ._HrzpinFYX_m9WfvM-lGCdVrnhnaGHhzt1e6eATE1Iw',
  },
};

vi.mock('../../../utils/api.js');

describe('ACTION: Auth user', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('THUNK: asyncLoginUser, SUCCESS', async () => {
    // mock;
    getOwnProfile.mockResolvedValue(fakeAuth);
    login.mockResolvedValue(fakeToken);
    const dispatch = vi.fn();

    // action
    await asyncLoginUser({
      email: 'jael@gmail.com',
      password: 'qwerty',
    })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setAuthUserAction(fakeAuth),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('THUNK: asyncLoginUser, FAILED', async () => {
    // mock;
    getOwnProfile.mockRejectedValue(fakeAuth);
    login.mockRejectedValue(fakeToken);
    const dispatch = vi.fn();

    // action
    await asyncLoginUser({
      email: 'jael@gmail.com',
      password: 'qwerty',
    })(dispatch).catch(() => null);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch)
      .not
      .toHaveBeenCalledWith(
        setAuthUserAction(fakeAuth),
      );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('THUNK: asyncRegisterUser, SUCCESS', async () => {
    // mock;
    register.mockResolvedValue(fakeAuth);
    const dispatch = vi.fn();

    // action
    await asyncRegisterUser({
      name: 'Jael',
      email: 'jael@gmail.com',
      password: 'jvaoinbe',
    })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('THUNK: asyncRegisterUser, FAILED', async () => {
    // mock;
    register.mockRejectedValue(fakeAuth);
    const dispatch = vi.fn();

    // action
    await asyncRegisterUser({
      name: 'Jael',
      email: 'jael@gmail.com',
      password: 'jvaoinbe',
    })(dispatch).catch(() => null);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('THUNK: asyncLogoutUser, SUCCESS', async () => {
    // mock;
    putAccessToken.mockResolvedValue(fakeToken);
    const dispatch = vi.fn();

    // action
    await asyncLogoutUser()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      unsetAuthUserAction(),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
