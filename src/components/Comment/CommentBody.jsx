import PropTypes from 'prop-types';
import React from 'react';

function CommentBody({ body }) {
  return (
    <div className=" mb-3 min-h-20 w-full px-3 pt-3 text-sm text-white">
      <p>{body}</p>
    </div>
  );
}

CommentBody.propTypes = {
  body: PropTypes.string.isRequired,
};

export default CommentBody;
