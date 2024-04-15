import PropTypes from 'prop-types';
import React from 'react';
import { threadValidator } from '../../utils/propValidator';
import ThreadItem from './ThreadItem';

function ThreadList({
  threadData, onUpVote, onDownVote, onNeutralVote,
}) {
  return (
    <div className="flex w-full flex-col gap-5 p-5">
      {threadData.map((thread) => (
        <div
          key={thread.id}
          className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg"
        >
          <ThreadItem
            data={thread}
            onUpVote={onUpVote}
            onDownVote={onDownVote}
            onNeutralVote={onNeutralVote}
          />
        </div>
      ))}
    </div>
  );
}

ThreadList.propTypes = {
  threadData: PropTypes.arrayOf(PropTypes.shape(threadValidator)).isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onNeutralVote: PropTypes.func.isRequired,
};

export default ThreadList;
