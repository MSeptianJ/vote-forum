import ThreadAccount from "./ThreadAccount";
import ThreadBody from "./ThreadBody";
import ThreadBtn from "./ThreadBtn";
import ThreadTitle from "./ThreadTitle";
import PropTypes from "prop-types";

const ThreadItem = ({ data }) => {
  return (
    <>
      <ThreadAccount ownerId={data.ownerId} createdAt={data.createdAt} />

      <ThreadTitle category={data.category} title={data.title} />

      <ThreadBody body={data.body} />

      <ThreadBtn id={data.id} total={data.totalComments} />
    </>
  );
};

ThreadItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ThreadItem;
