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
  try {
    const leaderBoards = await getLeaderboards();
    dispatch(receiveLeaderBoardAction(leaderBoards));
  } catch (error) {
    throw new Error(error);
  }
};
