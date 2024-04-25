import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  afterEach, describe, expect, it, vi,
} from 'vitest';
import { getLeaderboards } from '../../../utils/api';
import { asyncGetLeaderBoards, receiveLeaderBoardAction } from '../../leaderboard/action';

// ACTION: Leaderboard
// - THUNK: asyncGetLeaderBoards, SUCCESS
// - THUNK: asyncGetLeaderBoards, FAILED

const fakeLeaderboards = [
  {
    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
  {
    user: {
      id: 'users-2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 5,
  },
];

const fakeError = new Error('Ups, something went wrong');

vi.mock('../../../utils/api.js');

describe('ACTION: Leaderboards', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('THUNK: asyncGetLeaderBoards, SUCCESS', async () => {
    // mock;
    getLeaderboards.mockResolvedValue(fakeLeaderboards);
    const dispatch = vi.fn();

    // action
    await asyncGetLeaderBoards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderBoardAction(fakeLeaderboards),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('THUNK: asyncGetLeaderBoards, FAILED', async () => {
    // mock;
    getLeaderboards.mockRejectedValue(fakeError);
    const dispatch = vi.fn();

    // action
    await asyncGetLeaderBoards()(dispatch).catch(() => null);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).not.toHaveBeenCalledWith(receiveLeaderBoardAction(fakeLeaderboards));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
