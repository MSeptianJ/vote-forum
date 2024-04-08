import { Avatar } from 'flowbite-react';
import PropTypes from 'prop-types';
import React from 'react';
import { postedAt, showFormattedDate } from '../../utils/dateConverter';
import { ownerValidator } from '../../utils/propValidator';

function ThreadAccount({ user, createdAt }) {
  return (
    <div className=" flex w-full">
      <Avatar rounded size="sm" img={user?.avatar}>
        <div className="w-full space-y-1 text-gray-300">
          <div className="font-bold">{user?.name}</div>
          <div className=" flex justify-between gap-2">
            <div className="text-sm">{showFormattedDate(createdAt)}</div>
            <div className="text-sm">{postedAt(createdAt)}</div>
          </div>
        </div>
      </Avatar>
    </div>
  );
}

ThreadAccount.propTypes = {
  user: PropTypes.shape(ownerValidator).isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default ThreadAccount;
