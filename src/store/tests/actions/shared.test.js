import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  afterEach, describe, expect, it, vi,
} from 'vitest';
import asyncGetUsersAndThreads from '../../shared/action';
import { receiveThreadsAction } from '../../thread/action';
import { receiveUsersAction } from '../../user/action';
import { getAllThreads, getAllUsers } from '../../../utils/api';

// ACTION: Shared user and Thread
// - THUNK: asyncGetUsersAndThreads, SUCCESS
// - THUNK: asyncGetUsersAndThreads, FAILED

const fakeThreads = [
  {
    id: 1,
    title: 'Thread 1',
    body: 'Body 1',
    category: 'Category 1',
    createdAt: '2018-01-01T00:00:00.000Z',
    ownerId: 'users-1',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
];

const fakeUsers = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeError = new Error('Ups, something went wrong');

vi.mock('../../../utils/api.js');

describe('ACTION: Shared user and Thread', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('THUNK: asyncGetUsersAndThreads, SUCCESS', async () => {
    getAllUsers.mockResolvedValue(fakeUsers);
    getAllThreads.mockResolvedValue(fakeThreads);

    const dispatch = vi.fn();

    // action
    await asyncGetUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());

    expect(dispatch).toHaveBeenCalledWith(
      receiveUsersAction(fakeUsers),
    );

    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsAction(fakeThreads),
    );

    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('THUNK: asyncGetUsersAndThreads, FAILED', async () => {
    getAllUsers.mockRejectedValue(fakeError);
    getAllThreads.mockRejectedValue(fakeError);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncGetUsersAndThreads()(dispatch).catch(() => null);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).not.toHaveBeenCalledWith(receiveUsersAction(fakeUsers));
    expect(dispatch).not.toHaveBeenCalledWith(receiveThreadsAction(fakeThreads));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
