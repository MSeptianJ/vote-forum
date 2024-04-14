import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { getLeaderboards } from '../../utils/api';

export const LEADERBOARD_ACTION_TYPE = {
  RECEIVE: 'RECEIVE_LEADERBOARD',
};

export const receiveLeaderBoardAction = (leaderBoards) => ({
  type: LEADERBOARD_ACTION_TYPE.RECEIVE,
  payload: {
    leaderBoards,
  },
});

export const asyncGetLeaderBoards = () => async (dispatch) => {
  dispatch(showLoading());

  try {
    const leaderBoards = await getLeaderboards();
    dispatch(receiveLeaderBoardAction(leaderBoards));
  } catch (error) {
    dispatch(hideLoading());
    throw new Error(error);
  }

  dispatch(hideLoading());
};
