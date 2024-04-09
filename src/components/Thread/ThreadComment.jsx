import PropTypes from 'prop-types';
import React, { useState } from 'react';
import BtnPrimary from '../BtnPrimary';

function ThreadComment({ onComment }) {
  const [content, setContent] = useState('');

  const contentHandler = (e) => {
    setContent(e.target.innerHTML);
  };

  const handleComment = () => {
    onComment(content);
  };

  return (
    <div className=" mt-6 flex flex-col text-white">
      <h4 className=" font-bold">Make a Comment</h4>

      <p className="w-full mt-3 text-sm text-gray-300">Comment Content</p>
      <div
        onInput={contentHandler}
        contentEditable
        className=" min-h-20 mt-2 rounded-md border border-secondary p-3"
      />

      <div className="flex justify-end">
        <BtnPrimary
          btnText="Reply"
          btnFunction={handleComment}
          btnStyles="font-bold py-1 px-4 bg-secondary mt-3 rounded-md hover:bg-primary border border-secondary "
        />
      </div>
    </div>
  );
}

ThreadComment.propTypes = {
  onComment: PropTypes.func.isRequired,
};

export default ThreadComment;
