import PropTypes from 'prop-types';
import React from 'react';
import { commentValidator } from '../../utils/propValidator';
import CommentAccount from './CommentAccount';
import CommentBody from './CommentBody';
import CommentBtn from './CommentBtn';

function CommentItem({
  auth,
  data,
  onUpVote,
  onDownVote,
  onNeutralVote,
}) {
  return (
    <>
      <CommentAccount owner={data.owner} createdAt={data.createdAt} />
      <CommentBody body={data.content} />
      <CommentBtn
        id={data.id}
        auth={auth}
        upVotesBy={data.upVotesBy}
        downVotesBy={data.downVotesBy}
        totalDownVotes={data.downVotesBy.length}
        totalUpVotes={data.upVotesBy.length}
        onUpVote={onUpVote}
        onDownVote={onDownVote}
        onNeutralVote={onNeutralVote}
      />
    </>
  );
}

CommentItem.propTypes = {
  auth: PropTypes.string,
  data: PropTypes.shape(commentValidator).isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onNeutralVote: PropTypes.func.isRequired,
};

CommentItem.defaultProps = {
  auth: undefined,
};

export default CommentItem;
