import PropTypes from 'prop-types';
import React from 'react';

function ThreadBody({ body, isLimit }) {
  return (
    <div
      className={` mb-3 w-full px-3 pt-3 text-sm text-white  ${isLimit ? ' h-28 overflow-hidden text-ellipsis md:h-20' : ' '}`}
    >
      <p>{body}</p>
    </div>
  );
}

ThreadBody.propTypes = {
  body: PropTypes.string.isRequired,
  isLimit: PropTypes.bool,
};

ThreadBody.defaultProps = {
  isLimit: false,
};

export default ThreadBody;
