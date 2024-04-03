import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './auth-user/reducer';
import isPreloadReducer from './isPreload/reducer';
import leaderBoardsReducer from './leaderboard/reducer';
import usersReducer from './user/reducer';
import threadsReducer from './thread/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    loadingBar: loadingBarReducer,
    leaderBoards: leaderBoardsReducer,
    users: usersReducer,
    threads: threadsReducer,
  },
});

export default store;
