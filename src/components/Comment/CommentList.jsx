import PropTypes from 'prop-types';
import React from 'react';
import { commentValidator } from '../../utils/propValidator';
import CommentItem from './CommentItem';

function CommentList({
  auth,
  commentData,
  onUpVote,
  onDownVote,
  onNeutralVote,
}) {
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
            <CommentItem
              auth={auth}
              data={comment}
              onUpVote={onUpVote}
              onDownVote={onDownVote}
              onNeutralVote={onNeutralVote}
            />
          </div>
        ))}
      </div>
    </>
  );
}

CommentList.propTypes = {
  auth: PropTypes.string,
  commentData: PropTypes.arrayOf(PropTypes.shape(commentValidator)).isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onNeutralVote: PropTypes.func.isRequired,
};

CommentList.defaultProps = {
  auth: undefined,
};

export default CommentList;
