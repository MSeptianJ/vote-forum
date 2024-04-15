import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  IconComment,
  IconUnvote,
  IconUnvoteOutline,
  IconVote,
  IconVoteOutline,
} from '../../libs/icons';
import BtnPrimary from '../Button/BtnPrimary';

function ThreadBtn({
  id,
  auth,
  upVotesBy,
  downVotesBy,
  totalUpVotes,
  totalDownVotes,
  totalComments,
  onUpVote,
  onDownVote,
  onNeutralVote,
}) {
  const isUpVoted = upVotesBy?.includes(auth);
  const isDownVoted = downVotesBy?.includes(auth);

  const handleUpVote = () => {
    if (upVotesBy.includes(auth)) {
      onNeutralVote(id);
    } else {
      onUpVote(id);
    }
  };

  const handleDownVote = () => {
    if (downVotesBy.includes(auth)) {
      onNeutralVote(id);
    } else {
      onDownVote(id);
    }
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
          btnIcon={isDownVoted ? <IconUnvote /> : <IconUnvoteOutline />}
          btnFunction={handleDownVote}
          btnDisabled={!auth}
          btnStyles="flex items-center gap-3 justify-center border border-secondary text-lg py-1 px-4 rounded-md text-accent hover:bg-secondary"
        />
      </div>

      <div>
        <Link to={`/thread/${id}`}>
          <BtnPrimary
            btnText={String(totalComments)}
            btnIcon={<IconComment />}
            btnDisabled={!auth}
            btnStyles="flex items-center gap-3 justify-center border border-secondary text-lg py-1 px-4 rounded-md text-accent hover:bg-secondary"
          />
        </Link>
      </div>
    </div>
  );
}

ThreadBtn.propTypes = {
  id: PropTypes.string.isRequired,
  auth: PropTypes.string,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  totalUpVotes: PropTypes.number.isRequired,
  totalDownVotes: PropTypes.number.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onNeutralVote: PropTypes.func.isRequired,
};

ThreadBtn.defaultProps = {
  auth: undefined,
};

export default ThreadBtn;
