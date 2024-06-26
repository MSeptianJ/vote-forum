import PropTypes from 'prop-types';
import React from 'react';
import { threadValidator } from '../../utils/propValidator';
import ThreadAccount from './ThreadAccount';
import ThreadBody from './ThreadBody';
import ThreadBtn from './ThreadBtn';
import ThreadTitle from './ThreadTitle';

function ThreadItem({
  data, onUpVote, onDownVote, onNeutralVote,
}) {
  return (
    <>
      <ThreadAccount user={data.user} createdAt={data.createdAt} />

      <ThreadTitle category={data.category} title={data.title} id={data.id} />

      <ThreadBody body={data.body} isLimit />

      <ThreadBtn
        id={data.id}
        auth={data.auth}
        upVotesBy={data.upVotesBy}
        downVotesBy={data.downVotesBy}
        totalUpVotes={data.upVotesBy.length}
        totalDownVotes={data.downVotesBy.length}
        totalComments={data.totalComments}
        onUpVote={onUpVote}
        onDownVote={onDownVote}
        onNeutralVote={onNeutralVote}
      />
    </>
  );
}

ThreadItem.propTypes = {
  data: PropTypes.shape(threadValidator).isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onNeutralVote: PropTypes.func.isRequired,
};

export default ThreadItem;
