import PropTypes from 'prop-types';
import React from 'react';
import { IconUnvoteOutline, IconVoteOutline } from '../../libs/icons';
import BtnPrimary from '../BtnPrimary';

function CommentBtn({
  onUpVote, onDownVote, totalUpVotes, totalDownVotes,
}) {
  const handleUpVote = () => {
    onUpVote();
  };

  const handleDownVote = () => {
    onDownVote();
  };

  return (
    <div className=" flex items-center justify-between gap-3 border-t border-secondary pt-4">
      <div className=" grid grid-cols-2 gap-4">
        <BtnPrimary
          btnText={String(totalUpVotes)}
          btnIcon={<IconVoteOutline />}
          btnFunction={handleUpVote}
          btnStyles="flex items-center gap-3 justify-center border border-secondary text-lg py-1 px-4 rounded-md text-accent hover:bg-secondary"
        />

        <BtnPrimary
          btnText={String(totalDownVotes)}
          btnIcon={<IconUnvoteOutline />}
          btnFunction={handleDownVote}
          btnStyles="flex items-center gap-3 justify-center border border-secondary text-lg py-1 px-4 rounded-md text-accent hover:bg-secondary"
        />
      </div>
    </div>
  );
}

CommentBtn.propTypes = {
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  totalUpVotes: PropTypes.number.isRequired,
  totalDownVotes: PropTypes.number.isRequired,
};

export default CommentBtn;
