import React from 'react';
import UserList from './components/UserList';

function LeaderBoardPage() {
  const leaderboards = [
    {
      user: {
        id: 'test-1',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://ui-avatars.com/api/?name=random&background=random',
      },
      score: 10,
    },
    {
      user: {
        id: 'test-2',
        name: 'Jane Doe',
        email: 'jane@example.com',
        avatar: 'https://ui-avatars.com/api/?name=Mamah&background=random',
      },
      score: 5,
    },
    {
      user: {
        id: 'test-3',
        name: 'Jane Doe',
        email: 'jane@example.com',
        avatar: 'https://ui-avatars.com/api/?name=Kaka&background=random',
      },
      score: 5,
    },
  ];

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
