import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  afterEach, describe, expect, it, vi,
} from 'vitest';
import { getAllUsers } from '../../../utils/api';
import { asyncGetUsers, receiveUsersAction } from '../../user/action';

const fakeUsers = [
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
];

const fakeError = new Error('Ups');

vi.mock('../../../utils/api.js');

describe('ACTION: User', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('THUNK: asyncGetUsers, SUCCESS', async () => {
    getAllUsers.mockResolvedValue(fakeUsers);
    const dispatch = vi.fn();

    await asyncGetUsers()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveUsersAction(fakeUsers));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('THUNK: asyncGetUsers, FAILED', async () => {
    getAllUsers.mockRejectedValue(fakeError);
    const dispatch = vi.fn();

    await asyncGetUsers()(dispatch).catch(() => null);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).not.toHaveBeenCalledWith(receiveUsersAction(fakeUsers));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
