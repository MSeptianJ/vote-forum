import PropTypes from "prop-types";
import CommentAccount from "./CommentAccount";
import CommentBody from "./CommentBody";
import CommentBtn from "./CommentBtn";

const CommentItem = ({ data }) => {
  return (
    <>
      <CommentAccount createdAt={data.createdAt} />
      <CommentBody body={data.content} />
      <CommentBtn
        totalDownVotes={data.downVotesBy.length}
        totalUpVotes={data.upVotesBy.length}
      />
    </>
  );
};

CommentItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CommentItem;
