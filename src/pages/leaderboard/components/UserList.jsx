import PropTypes from 'prop-types';
import React from 'react';
import { leaderBoardValidator } from '../../../utils/propValidator';
import UserItem from './UserItem';

function UserList({ userData }) {
  return (
    <div className="flex w-full flex-col">
      {userData.map((data) => (
        <UserItem key={data.user.id} data={data} />
      ))}
    </div>
  );
}

UserList.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.shape(leaderBoardValidator)).isRequired,
};

export default UserList;
