import { Avatar } from 'flowbite-react';
import PropTypes from 'prop-types';
import React from 'react';
import { postedAt, showFormattedDate } from '../../utils/dateConverter';
import { ownerValidator } from '../../utils/propValidator';

function CommentAccount({ owner, createdAt }) {
  return (
    <div className=" flex w-full">
      <Avatar rounded size="sm" img={owner.avatar}>
        <div className="w-full space-y-1 text-gray-300">
          <div className="font-bold">{owner.name}</div>
          <div className=" flex justify-between gap-2">
            <div className="text-sm">{showFormattedDate(createdAt)}</div>
            <div className="text-sm">{postedAt(createdAt)}</div>
          </div>
        </div>
      </Avatar>
    </div>
  );
}

CommentAccount.propTypes = {
  owner: PropTypes.shape(ownerValidator).isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default CommentAccount;
