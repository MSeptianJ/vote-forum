import PropTypes from 'prop-types';
import React from 'react';
import ThreadAccount from '../../../components/Thread/ThreadAccount';
import ThreadBody from '../../../components/Thread/ThreadBody';
import ThreadBtn from '../../../components/Thread/ThreadBtn';
import ThreadComment from '../../../components/Thread/ThreadComment';
import ThreadTitle from '../../../components/Thread/ThreadTitle';
import { threadDetailValidator } from '../../../utils/propValidator';

function ThreadDetail({
  threadDetailData, onUpVote, onDownVote, onComment,
}) {
  return (
    <div className="mb-10 flex w-full flex-col rounded-md bg-primary p-5 shadow-lg">
      <ThreadAccount user={threadDetailData.owner} createdAt={threadDetailData?.createdAt} />

      <ThreadTitle
        category={threadDetailData.category}
        title={threadDetailData.title}
        id={threadDetailData.id}
      />

      <ThreadBody body={threadDetailData.body} />

      <ThreadBtn
        id={threadDetailData.id}
        totalDownVotes={threadDetailData.downVotesBy.length}
        totalUpVotes={threadDetailData.upVotesBy.length}
        totalComments={threadDetailData.comments.length}
        onUpVote={onUpVote}
        onDownVote={onDownVote}
      />

      <ThreadComment onComment={onComment} />
    </div>
  );
}

ThreadDetail.propTypes = {
  threadDetailData: PropTypes.shape(threadDetailValidator).isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired,
};

export default ThreadDetail;
