import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  afterEach, describe, expect, it, vi,
} from 'vitest';
import { createThread, getAllThreads } from '../../../utils/api';
import {
  addThreadAction,
  asyncAddThread,
  asyncGetThreads,
  receiveThreadsAction,
} from '../../thread/action';

// ACTION: Thread
// - THUNK: asyncGetThreads, SUCCESS
// - THUNK: asyncGetThreads, FAILED
// - THUNK: asyncAddThread, SUCCESS
// - THUNK: asyncAddThread, FAILED

const fakeThreads = [
  {
    id: 'thread-Np47p4jhUXYhrhRn',
    title: 'Bagaimana pengalamanmu belajar Redux?',
    body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
    category: 'redux',
    createdAt: '2023-05-29T07:55:52.266Z',
    ownerId: 'user-mQhLzINW_w5TxxYf',
    totalComments: 2,
    upVotesBy: [],
    downVotesBy: [
      'user-5d25rHmwh6xpC0G8',
    ],
  },
];

const fakeError = new Error('Ups');

vi.mock('../../../utils/api.js');

describe('ACTION: Thread', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('THUNK: asyncGetThreads, SUCCESS', async () => {
    getAllThreads.mockResolvedValue(fakeThreads);

    const dispatch = vi.fn();

    await asyncGetThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsAction(fakeThreads));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('THUNK: asyncGetThreads, FAILED', async () => {
    getAllThreads.mockRejectedValue(fakeError);

    const dispatch = vi.fn();

    await asyncGetThreads()(dispatch).catch(() => null);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).not.toHaveBeenCalledWith(receiveThreadsAction(fakeThreads));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('THUNK: asyncAddThread, SUCCESS', async () => {
    createThread.mockResolvedValue(fakeThreads);

    const dispatch = vi.fn();

    await asyncAddThread({
      title: 'Makan',
      body: 'hari ini saya makan',
      category: 'random',
    })(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(addThreadAction(fakeThreads));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('THUNK: asyncAddThreads, FAILED', async () => {
    getAllThreads.mockRejectedValue(fakeError);

    const dispatch = vi.fn();

    await asyncAddThread({
      title: 'Makan',
      body: 'hari ini saya makan',
      category: 'random',
    })(dispatch).catch(() => null);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).not.toHaveBeenCalledWith(addThreadAction(fakeThreads));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
