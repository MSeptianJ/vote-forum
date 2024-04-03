import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './auth-user/reducer';
import isPreloadReducer from './isPreload/reducer';
import leaderBoardsReducer from './leaderboard/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    loadingBar: loadingBarReducer,
    leaderBoards: leaderBoardsReducer,
  },
});

export default store;
