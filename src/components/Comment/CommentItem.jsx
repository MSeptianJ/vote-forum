import PropTypes from 'prop-types';
import React from 'react';
import { commentValidator } from '../../utils/propValidator';
import CommentAccount from './CommentAccount';
import CommentBody from './CommentBody';
import CommentBtn from './CommentBtn';

function CommentItem({ data, onUpVote, onDownVote }) {
  return (
    <>
      <CommentAccount createdAt={data.createdAt} />
      <CommentBody body={data.content} />
      <CommentBtn
        totalDownVotes={data.downVotesBy.length}
        totalUpVotes={data.upVotesBy.length}
        onUpVote={onUpVote}
        onDownVote={onDownVote}
      />
    </>
  );
}

CommentItem.propTypes = {
  data: PropTypes.shape(commentValidator).isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
};

export default CommentItem;
