import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import BottomBar from './components/BottomBar';
import CategoryBox from './components/CategoryBox';
import LoadingStrip from './components/LoadingStrip';
import TopBar from './components/TopBar';
import { asyncPreloadProcess } from './store/isPreload/action';
import { asyncGetLeaderBoards } from './store/leaderboard/action';
import { asyncLogoutUser } from './store/auth-user/action';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isPreload = useSelector((states) => states.isPreload);
  const authUser = useSelector((states) => states.authUser);
  const boxState = useSelector((states) => states.categoryBox);

  const onLogOut = () => {
    dispatch(asyncLogoutUser());
  };

  useEffect(() => {
    dispatch(asyncPreloadProcess());
    dispatch(asyncGetLeaderBoards());
  }, [dispatch]);

  if (isPreload) {
    return <p>preloading</p>;
  }

  return (
    <div className=" min-h-screen w-full">
      <ScrollRestoration />
      <TopBar onLogOut={onLogOut} authUser={authUser} />

      <LoadingStrip />

      <div className=" m-auto min-h-screen w-full lg:max-w-screen-lg">
        <Outlet />
      </div>

      {location.pathname === '/' && (boxState && <CategoryBox />)}

      <BottomBar />
    </div>
  );
}

export default App;
