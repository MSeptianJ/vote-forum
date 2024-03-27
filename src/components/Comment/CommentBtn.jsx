import PropTypes from "prop-types";
import { IconUnvoteOutline, IconVoteOutline } from "../../libs/icons";
import BtnPrimary from "../BtnPrimary";

const CommentBtn = ({ onUpVote, onDownVote, totalUpVotes, totalDownVotes }) => {
  return (
    <div className=" flex items-center justify-between gap-3 border-t border-secondary pt-4">
      <div className=" grid grid-cols-2 gap-4">
        <BtnPrimary
          btnText={String(totalUpVotes)}
          btnIcon={<IconVoteOutline />}
          btnFunction={onUpVote}
          btnStyles={
            "flex items-center gap-3 justify-center border border-secondary text-lg py-2 px-4 rounded-md text-accent hover:bg-secondary"
          }
        />

        <BtnPrimary
          btnText={String(totalDownVotes)}
          btnIcon={<IconUnvoteOutline />}
          btnFunction={onDownVote}
          btnStyles={
            "flex items-center gap-3 justify-center border border-secondary text-lg py-2 px-4 rounded-md text-accent hover:bg-secondary"
          }
        />
      </div>
    </div>
  );
};

CommentBtn.propTypes = {
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func,
  totalUpVotes: PropTypes.number,
  totalDownVotes: PropTypes.number,
};

export default CommentBtn;
