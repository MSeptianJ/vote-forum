import PropTypes from "prop-types";
import { Avatar } from "flowbite-react";

const UserItem = ({ data }) => {
  return (
    <div className="flex w-full items-center justify-between border-b border-secondary py-2">
      <div>
        <Avatar rounded img={data.user.avatar}>
          <div className="w-full">{data.user.name}</div>
        </Avatar>
      </div>

      <div>
        <p>{data.score}</p>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default UserItem;
