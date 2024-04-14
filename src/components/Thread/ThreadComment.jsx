import PropTypes from 'prop-types';
import React, { useState } from 'react';
import BtnPrimary from '../Button/BtnPrimary';

function ThreadComment({ auth, onComment }) {
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

      {auth ? (
        <div>
          <p className="mt-3 w-full text-sm text-gray-300">Comment Content</p>
          <div
            onInput={contentHandler}
            contentEditable
            className=" mt-2 min-h-20 rounded-md border border-secondary p-3"
          />

          <div className="flex justify-end">
            <BtnPrimary
              btnText="Reply"
              btnFunction={handleComment}
              btnStyles="font-bold py-1 px-4 bg-secondary mt-3 rounded-md hover:bg-primary border border-secondary "
            />
          </div>
        </div>
      ) : (
        <div className="w-full text-center">
          <p className="text-sm">Anda harus log in terlebih dahulu</p>
        </div>
      )}
    </div>
  );
}

ThreadComment.propTypes = {
  auth: PropTypes.string,
  onComment: PropTypes.func.isRequired,
};

ThreadComment.defaultProps = {
  auth: undefined,
};

export default ThreadComment;
