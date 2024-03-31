import PropTypes from 'prop-types';
import React from 'react';
import { threadDetailValidator } from '../../utils/propValidator';
import ThreadAccount from './ThreadAccount';
import ThreadBody from './ThreadBody';
import ThreadBtn from './ThreadBtn';
import ThreadComment from './ThreadComment';
import ThreadTitle from './ThreadTitle';

function ThreadWithComment({
  data, onUpVote, onDownVote, onComment,
}) {
  return (
    <div className="mb-10 flex w-full flex-col rounded-md bg-primary p-5 shadow-lg">
      <ThreadAccount ownerId={data?.owner.id} createdAt={data.createdAt} />

      <ThreadTitle category={data.category} title={data.title} id={data.id} />

      <ThreadBody body={data.body} />

      <ThreadBtn
        id={data.id}
        totalDownVotes={data.downVotesBy.length}
        totalUpVotes={data.upVotesBy.length}
        totalComments={data.comments.length}
        onUpVote={onUpVote}
        onDownVote={onDownVote}
      />

      <ThreadComment onComment={onComment} />
    </div>
  );
}

ThreadWithComment.propTypes = {
  data: PropTypes.shape(threadDetailValidator).isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired,
};

export default ThreadWithComment;
