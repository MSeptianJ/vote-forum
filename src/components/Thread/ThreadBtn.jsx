import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  IconComment,
  IconUnvoteOutline,
  IconVoteOutline,
} from "../../libs/icons";
import BtnPrimary from "../BtnPrimary";

const ThreadBtn = ({
  onUpVote,
  onDownVote,
  id,
  totalUpVotes,
  totalDownVotes,
  totalComments,
}) => {
  return (
    <div className=" flex items-center justify-between gap-3 border-t border-secondary pt-4">
      <div className=" grid grid-cols-2 gap-4">
        <BtnPrimary
          btnText={String(totalUpVotes)}
          btnIcon={<IconVoteOutline />}
          btnFunction={onUpVote}
          btnStyles={
            "flex items-center gap-3 justify-center border border-secondary text-lg py-1 px-4 rounded-md text-accent hover:bg-secondary"
          }
        />

        <BtnPrimary
          btnText={String(totalDownVotes)}
          btnIcon={<IconUnvoteOutline />}
          btnFunction={onDownVote}
          btnStyles={
            "flex items-center gap-3 justify-center border border-secondary text-lg py-1 px-4 rounded-md text-accent hover:bg-secondary"
          }
        />
      </div>

      <div>
        <Link to={`/thread/${id}`}>
          <BtnPrimary
            btnText={String(totalComments)}
            btnIcon={<IconComment />}
            btnStyles={
              "flex items-center gap-3 justify-center border border-secondary text-lg py-1 px-4 rounded-md text-accent hover:bg-secondary"
            }
          />
        </Link>
      </div>
    </div>
  );
};

ThreadBtn.propTypes = {
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func,
  id: PropTypes.string,
  totalComments: PropTypes.number,
  totalUpVotes: PropTypes.number,
  totalDownVotes: PropTypes.number,
};

export default ThreadBtn;
