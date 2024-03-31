import PropTypes from 'prop-types';
import React from 'react';
import { threadValidator } from '../../utils/propValidator';
import ThreadAccount from './ThreadAccount';
import ThreadBody from './ThreadBody';
import ThreadBtn from './ThreadBtn';
import ThreadTitle from './ThreadTitle';

function ThreadItem({ data, onUpVote, onDownVote }) {
  return (
    <>
      <ThreadAccount ownerId={data.ownerId} createdAt={data.createdAt} />

      <ThreadTitle category={data.category} title={data.title} id={data.id} />

      <ThreadBody body={data.body} isLimit />

      <ThreadBtn
        id={data.id}
        totalUpVotes={data.upVotesBy.length}
        totalDownVotes={data.downVotesBy.length}
        totalComments={data.totalComments}
        onUpVote={onUpVote}
        onDownVote={onDownVote}
      />
    </>
  );
}

ThreadItem.propTypes = {
  data: PropTypes.shape(threadValidator).isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
};

export default ThreadItem;
