import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import {
  IconHome,
  IconHomeOutline,
  IconLeaderboard,
  IconLeaderboardOutline,
  IconSearch,
} from '../../libs/icons';
import { toggleCategoryBoxAction } from '../../store/category-box/action';
import BtnPrimary from '../Button/BtnPrimary';

function BottomBar() {
  const location = useLocation();
  const dispatch = useDispatch();

  const toggleCategoryBox = () => {
    dispatch(toggleCategoryBoxAction());
  };

  return (
    <div className=" sticky bottom-0 m-auto w-full bg-primary text-white md:hidden">
      <div className=" m-auto grid w-3/4 grid-cols-3 justify-center justify-items-center">
        <Link to="/" className="w-full">
          <BtnPrimary
            btnStyles="w-full p-4 flex text-2xl justify-center items-center gap-2 hover:bg-secondary"
            btnIcon={
              location.pathname === '/' ? <IconHome /> : <IconHomeOutline />
            }
          />
        </Link>

        <div className="w-full">
          <BtnPrimary
            btnFunction={toggleCategoryBox}
            btnStyles="w-full p-4 flex text-2xl justify-center items-center gap-2 hover:bg-secondary"
            btnIcon={<IconSearch />}
          />
        </div>

        <Link to="/leaderboard" className="w-full">
          <BtnPrimary
            btnStyles="w-full p-4 flex text-2xl justify-center items-center gap-2 hover:bg-secondary"
            btnIcon={
              location.pathname === '/leaderboard' ? (
                <IconLeaderboard />
              ) : (
                <IconLeaderboardOutline />
              )
            }
          />
        </Link>
      </div>
    </div>
  );
}

BottomBar.propTypes = {};

export default BottomBar;
