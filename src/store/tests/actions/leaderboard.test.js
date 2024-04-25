import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  afterEach, describe, expect, it, vi,
} from 'vitest';
import { getLeaderboards } from '../../../utils/api';
import { asyncGetLeaderBoards, receiveLeaderBoardAction } from '../../leaderboard/action';

// Test asyncGetLeaderBoards
// - should dispatch action correctly when data fetching success
// - should dispatch action and call alert correctly when data fetching failed

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

describe('ACTION: Shared user and Thread', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('Should dispatch action correctly when data fetching success', async () => {
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

  it('Should dispatch action correctly when data fetching failed', async () => {
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
