import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ThreadTitle = ({ category, title, id }) => {
  return (
    <div className=" mt-2">
      <p className=" font-bold lowercase text-secondary">{`#${category}`}</p>
      <Link to={`/thread/${id}`}>
        <h3 className="text-xl font-bold text-white transition-colors duration-300 hover:text-accent">
          {title}
        </h3>
      </Link>
    </div>
  );
};

ThreadTitle.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ThreadTitle;
