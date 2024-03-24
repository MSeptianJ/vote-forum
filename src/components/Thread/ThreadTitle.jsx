import PropTypes from "prop-types";

const ThreadTitle = ({ category, title }) => {
  return (
    <div className=" mt-2">
      <p className=" font-bold lowercase text-secondary">{`#${category}`}</p>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
  );
};

ThreadTitle.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ThreadTitle;
