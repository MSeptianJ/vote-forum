import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  describe, expect, it, vi,
} from 'vitest';
import { getOwnProfile, login } from '../../../utils/api';
import { asyncLoginUser, setAuthUserAction } from '../../auth-user/action';

// Test asyncLoginUser
// - should dispatch action correctly when data fetching success
// - should dispatch action and call alert correctly when data fetching failed

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
  it('Should dispatch action correctly when data fetching success', async () => {
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

  it('Should dispatch action correctly when data fetching failed', async () => {
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
});
