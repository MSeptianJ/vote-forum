import ThreadAccount from "./ThreadAccount";
import ThreadBody from "./ThreadBody";
import ThreadBtn from "./ThreadBtn";
import ThreadTitle from "./ThreadTitle";
import PropTypes from "prop-types";

const ThreadItem = ({ data }) => {
  return (
    <>
      <ThreadAccount ownerId={data.ownerId} createdAt={data.createdAt} />

      <ThreadTitle category={data.category} title={data.title} id={data.id} />

      <ThreadBody body={data.body} isLimit />

      <ThreadBtn
        id={data.id}
        totalUpVotes={data.upVotesBy.length}
        totalDownVotes={data.downVotesBy.length}
        totalComments={data.totalComments}
      />
    </>
  );
};

ThreadItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ThreadItem;
