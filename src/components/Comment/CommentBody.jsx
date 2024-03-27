import PropTypes from "prop-types";

const CommentBody = ({ body }) => {
  return (
    <div className={` mb-3 min-h-20 w-full px-3 pt-3 text-sm text-white`}>
      <p>{body}</p>
    </div>
  );
};

CommentBody.propTypes = {
  body: PropTypes.string,
};

export default CommentBody;
