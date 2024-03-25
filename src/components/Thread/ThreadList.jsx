import ThreadItem from "./ThreadItem";
import PropTypes from "prop-types";

const ThreadList = ({ threadData }) => {
  return (
    <div className="flex w-full flex-col gap-5 p-5">
      {threadData.map((thread, i) => (
        <div
          key={i}
          className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg"
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
