import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './auth-user/reducer';
import categoryBoxReducer from './category-box/reducer';
import commentsReducer from './comment/redux';
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
    comments: commentsReducer,
    leaderBoards: leaderBoardsReducer,
    loadingBar: loadingBarReducer,
    categoryBox: categoryBoxReducer,
  },
});

export default store;
