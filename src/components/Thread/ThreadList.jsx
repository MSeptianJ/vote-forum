import ThreadItem from "./ThreadItem";
import PropTypes from "prop-types";

const ThreadList = ({ threadData }) => {
  return (
    <div className="flex w-full flex-col gap-5 p-5">
      {threadData.map((thread) => (
        <div
          key={thread.id}
          className="flex w-full flex-col rounded-md bg-primary p-5"
        >
          <ThreadItem data={thread} />
        </div>
      ))}
    </div>
  );
};

ThreadList.propTypes = {
  threadData: PropTypes.array.isRequired,
};

export default ThreadList;
