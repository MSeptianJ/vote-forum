import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetLeaderBoards } from '../../store/leaderboard/action';
import UserList from './components/UserList';

function LeaderBoardPage() {
  const dispatch = useDispatch();
  const leaderboards = useSelector((states) => states.leaderBoards);

  useEffect(() => {
    dispatch(asyncGetLeaderBoards());
  }, [dispatch]);

  return (
    <div className="mt-8 w-full px-5">
      <div className="mb-5 flex w-full flex-col gap-2 rounded-md bg-primary p-5 text-white shadow-lg">
        <h4 className=" text-xl font-bold">Leaderboard</h4>

        <div className=" flex w-full justify-between text-gray-300">
          <p>Pengguna</p>
          <p>Skor</p>
        </div>

        <UserList userData={leaderboards} />
      </div>
    </div>
  );
}

LeaderBoardPage.propTypes = {};

export default LeaderBoardPage;
