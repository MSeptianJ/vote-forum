import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Outlet,
  ScrollRestoration,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import BottomBar from './components/Bar/BottomBar';
import TopBar from './components/Bar/TopBar';
import CategoryBox from './components/Category/CategoryBox';
import LoadingIcon from './components/Other/LoadingIcon';
import LoadingStrip from './components/Other/LoadingStrip';
import { asyncLogoutUser } from './store/auth-user/action';
import {
  asyncDownVoteComment,
  asyncNeutralVoteComment,
  asyncUpVoteComment,
} from './store/comment/action';
import { asyncPreloadProcess } from './store/isPreload/action';
import { asyncGetLeaderBoards } from './store/leaderboard/action';
import {
  asyncDownVoteThread,
  asyncNeutralVoteThread,
  asyncUpVoteThread,
} from './store/thread/action';
import {
  asyncDownVoteThreadDetail,
  asyncNeutralVoteThreadDetail,
  asyncUpVoteThreadDetail,
} from './store/threadDetail/action';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isPreload = useSelector((states) => states.isPreload);
  const authUser = useSelector((states) => states.authUser);
  const boxState = useSelector((states) => states.categoryBox);
  const threads = useSelector((states) => states.threads);
  const [searchParam, setSearchParam] = useSearchParams();
  const searchedCategory = searchParam.get('category');

  const categories = [
    ...(new Set(threads?.map((thread) => thread.category)) ?? []),
  ];

  const onSearchCategory = (category) => {
    if (searchedCategory === category) {
      setSearchParam('');
    } else {
      setSearchParam({ category });
    }
  };

  const onLogOut = () => {
    dispatch(asyncLogoutUser());
  };

  const onUpVoteThread = (threadId) => {
    dispatch(asyncUpVoteThread(threadId));
  };

  const onDownVoteThread = (threadId) => {
    dispatch(asyncDownVoteThread(threadId));
  };

  const onNeutralVoteThread = (threadId) => {
    dispatch(asyncNeutralVoteThread(threadId));
  };

  const onUpVoteThreadDetail = (threadId) => {
    dispatch(asyncUpVoteThreadDetail(threadId));
  };

  const onDownVoteThreadDetail = (threadId) => {
    dispatch(asyncDownVoteThreadDetail(threadId));
  };

  const onNeutralVoteThreadDetail = (threadId) => {
    dispatch(asyncNeutralVoteThreadDetail(threadId));
  };

  const onUpVoteComment = (commendId) => {
    dispatch(asyncUpVoteComment(commendId));
  };

  const onDownVoteComment = (commendId) => {
    dispatch(asyncDownVoteComment(commendId));
  };

  const onNeutralVoteComment = (commendId) => {
    dispatch(asyncNeutralVoteComment(commendId));
  };

  useEffect(() => {
    dispatch(asyncPreloadProcess());
    dispatch(asyncGetLeaderBoards());
  }, [dispatch]);

  if (isPreload) {
    <LoadingIcon />;
  }

  return (
    <div className=" min-h-screen w-full">
      <ScrollRestoration />
      <LoadingStrip />
      <TopBar onLogOut={onLogOut} authUser={authUser} />

      <div className=" m-auto min-h-screen w-full lg:max-w-screen-lg">
        {!isPreload && (
          <Outlet
            context={{
              categories,
              searchedCategory,
              onSearchCategory,
              onUpVoteThread,
              onDownVoteThread,
              onNeutralVoteThread,
              onUpVoteThreadDetail,
              onDownVoteThreadDetail,
              onNeutralVoteThreadDetail,
              onUpVoteComment,
              onDownVoteComment,
              onNeutralVoteComment,
            }}
          />
        )}
      </div>

      {location.pathname === '/' && boxState && (
        <CategoryBox
          categories={categories}
          onSearch={onSearchCategory}
          searched={searchedCategory}
        />
      )}

      <BottomBar />
    </div>
  );
}

export default App;
