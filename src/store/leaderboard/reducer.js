import { LEADERBOARD_ACTION_TYPE } from './action';

function leaderBoardsReducer(leaderBoards = [], action = {}) {
  switch (action.type) {
    case LEADERBOARD_ACTION_TYPE.RECEIVE:
      return action.payload.leaderBoards;
    default:
      return leaderBoards;
  }
}

export default leaderBoardsReducer;
