import PropTypes from 'prop-types';
import React from 'react';
import { IconUnvoteOutline, IconVote, IconVoteOutline } from '../../libs/icons';
import BtnPrimary from '../BtnPrimary';

function CommentBtn({
  id,
  auth,
  onUpVote,
  onDownVote,
  totalUpVotes,
  totalDownVotes,
  upVotesBy,
  downVotesBy,
}) {
  const isUpVoted = upVotesBy?.includes(auth);
  const isDownVoted = downVotesBy?.includes(auth);

  const handleUpVote = () => {
    onUpVote(id);
  };

  const handleDownVote = () => {
    onDownVote(id);
  };

  return (
    <div className=" flex items-center justify-between gap-3 border-t border-secondary pt-4">
      <div className=" grid grid-cols-2 gap-4">
        <BtnPrimary
          btnText={String(totalUpVotes)}
          btnIcon={isUpVoted ? <IconVote /> : <IconVoteOutline />}
          btnFunction={handleUpVote}
          btnDisabled={!auth}
          btnStyles="flex items-center gap-3 justify-center border border-secondary text-lg py-1 px-4 rounded-md text-accent hover:bg-secondary"
        />

        <BtnPrimary
          btnText={String(totalDownVotes)}
          btnIcon={isDownVoted ? <IconVote /> : <IconUnvoteOutline />}
          btnFunction={handleDownVote}
          btnDisabled={!auth}
          btnStyles="flex items-center gap-3 justify-center border border-secondary text-lg py-1 px-4 rounded-md text-accent hover:bg-secondary"
        />
      </div>
    </div>
  );
}

CommentBtn.propTypes = {
  id: PropTypes.string.isRequired,
  auth: PropTypes.string,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  totalUpVotes: PropTypes.number.isRequired,
  totalDownVotes: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentBtn.defaultProps = {
  auth: undefined,
};

export default CommentBtn;
