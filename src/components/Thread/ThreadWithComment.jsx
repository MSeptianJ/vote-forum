import PropTypes from "prop-types";
import ThreadAccount from "./ThreadAccount";
import ThreadBody from "./ThreadBody";
import ThreadBtn from "./ThreadBtn";
import ThreadComment from "./ThreadComment";
import ThreadTitle from "./ThreadTitle";

const ThreadWithComment = ({ data }) => {
  return (
    <div className="mb-10 flex w-full flex-col rounded-md bg-primary p-5 shadow-lg">
      <ThreadAccount ownerId={data?.ownerId} createdAt={data.createdAt} />

      <ThreadTitle category={data.category} title={data.title} id={data.id} />

      <ThreadBody body={data.body} />

      <ThreadBtn
        id={data.id}
        totalDownVotes={data.downVotesBy.length}
        totalUpVotes={data.upVotesBy.length}
        totalComments={data.comments.length}
      />

      <ThreadComment />
    </div>
  );
};

ThreadWithComment.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ThreadWithComment;
