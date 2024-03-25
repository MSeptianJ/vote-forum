import PropTypes from "prop-types";

const ThreadBody = ({ body }) => {
  return (
    <div className="mb-5 h-36 w-full overflow-hidden text-ellipsis p-3 text-sm text-white md:h-16">
      <p>{body}</p>
    </div>
  );
};

ThreadBody.propTypes = {
  body: PropTypes.string.isRequired,
};

export default ThreadBody;
