import PropTypes from 'prop-types';
import React from 'react';
import { commentValidator } from '../../utils/propValidator';
import CommentItem from './CommentItem';

function CommentList({ commentData, onUpVote, onDownVote }) {
  return (
    <>
      <h3 className=" mb-3 text-xl font-bold">
        Comments (
        {commentData.length}
        )
      </h3>
      <div className="flex w-full flex-col gap-5">
        {commentData.map((comment) => (
          <div
            key={comment.id}
            className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg"
          >
            <CommentItem data={comment} onUpVote={onUpVote} onDownVote={onDownVote} />
          </div>
        ))}
      </div>
    </>
  );
}

CommentList.propTypes = {
  commentData: PropTypes.arrayOf(PropTypes.shape(commentValidator)).isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
};

export default CommentList;
