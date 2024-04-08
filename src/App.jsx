import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import BottomBar from './components/BottomBar';
import CategoryBox from './components/CategoryBox';
import LoadingStrip from './components/LoadingStrip';
import TopBar from './components/TopBar';
import { asyncPreloadProcess } from './store/isPreload/action';
import { asyncGetLeaderBoards } from './store/leaderboard/action';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isPreload = useSelector((states) => states.isPreload);
  const authUser = useSelector((states) => states.authUser);

  useEffect(() => {
    dispatch(asyncPreloadProcess());
    dispatch(asyncGetLeaderBoards());
  }, [dispatch]);

  if (isPreload) {
    return <p>preloading</p>;
  }

  return (
    <div className=" min-h-screen w-full">
      <TopBar authUser={authUser} />

      <LoadingStrip />

      <div className=" m-auto min-h-screen w-full lg:max-w-screen-lg">
        <Outlet />
      </div>

      {location.pathname === '/' && <CategoryBox />}

      <BottomBar />
    </div>
  );
}

export default App;
