import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BottomBar from './components/BottomBar';
import CategoryBox from './components/CategoryBox';
import TopBar from './components/TopBar';

function App() {
  const location = useLocation();

  return (
    <div className=" min-h-screen w-full">
      <TopBar />

      <div className=" m-auto min-h-screen w-full lg:max-w-screen-lg">
        <Outlet />
      </div>

      {location.pathname === '/' && <CategoryBox />}

      <BottomBar />
    </div>
  );
}

export default App;
