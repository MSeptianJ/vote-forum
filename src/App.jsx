import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import BottomBar from './components/BottomBar';
import CategoryBox from './components/CategoryBox';
import LoadingStrip from './components/LoadingStrip';
import TopBar from './components/TopBar';
import { asyncLogoutUser } from './store/auth-user/action';
import { asyncDownVoteComment, asyncUpVoteComment } from './store/comment/action';
import { asyncPreloadProcess } from './store/isPreload/action';
import { asyncGetLeaderBoards } from './store/leaderboard/action';
import { asyncDownVoteThread, asyncUpVoteThread } from './store/thread/action';
import { asyncDownVoteThreadDetail, asyncUpVoteThreadDetail } from './store/threadDetail/action';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isPreload = useSelector((states) => states.isPreload);
  const authUser = useSelector((states) => states.authUser);
  const boxState = useSelector((states) => states.categoryBox);

  const onLogOut = () => {
    dispatch(asyncLogoutUser());
  };

  const onUpVoteThread = (threadId) => {
    dispatch(asyncUpVoteThread(threadId));
  };

  const onDownVoteThread = (threadId) => {
    dispatch(asyncDownVoteThread(threadId));
  };

  const onUpVoteThreadDetail = (threadId) => {
    dispatch(asyncUpVoteThreadDetail(threadId));
  };

  const onDownVoteThreadDetail = (threadId) => {
    dispatch(asyncDownVoteThreadDetail(threadId));
  };

  const onUpVoteComment = (commendId) => {
    dispatch(asyncUpVoteComment(commendId));
  };

  const onDownVoteComment = (commendId) => {
    dispatch(asyncDownVoteComment(commendId));
  };

  useEffect(() => {
    dispatch(asyncPreloadProcess());
    dispatch(asyncGetLeaderBoards());
  }, [dispatch]);

  return (
    <div className=" min-h-screen w-full">
      <ScrollRestoration />
      <LoadingStrip />
      <TopBar onLogOut={onLogOut} authUser={authUser} />

      <div className=" m-auto min-h-screen w-full lg:max-w-screen-lg">
        {!isPreload && (
          <Outlet context={{
            onUpVoteThread,
            onDownVoteThread,
            onUpVoteThreadDetail,
            onDownVoteThreadDetail,
            onUpVoteComment,
            onDownVoteComment,
          }}
          />
        )}
      </div>

      {location.pathname === '/' && (boxState && <CategoryBox />)}

      <BottomBar />
    </div>
  );
}

export default App;
