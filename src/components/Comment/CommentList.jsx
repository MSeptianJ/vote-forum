import PropTypes from "prop-types";
import CommentItem from "./CommentItem";

const CommentList = ({ commentData }) => {
  return (
    <>
      <h3 className=" mb-3 text-xl font-bold">
        Comments ( {commentData.length} )
      </h3>
      <div className="flex w-full flex-col gap-5">
        {commentData.map((thread, i) => (
          <div
            key={i}
            className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg"
          >
            <CommentItem data={thread} />
          </div>
        ))}
      </div>
    </>
  );
};

CommentList.propTypes = {
  commentData: PropTypes.array.isRequired,
};

export default CommentList;
