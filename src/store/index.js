import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './auth-user/reducer';
import isPreloadReducer from './isPreload/reducer';
import leaderBoardsReducer from './leaderboard/reducer';
import threadsReducer from './thread/reducer';
import threadDetailReducer from './threadDetail/reducer';
import usersReducer from './user/reducer';

const store = configureStore({
  reducer: {
    isPreload: isPreloadReducer,
    authUser: authUserReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    leaderBoards: leaderBoardsReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
