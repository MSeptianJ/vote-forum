import { Avatar } from "flowbite-react";
import PropTypes from "prop-types";
import { postedAt, showFormattedDate } from "../../utils/dateConverter";

const ThreadAccount = ({ ownerId, createdAt }) => {
  const data = {
    id: "john_doe",
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://ui-avatars.com/api/?name=romani&background=random",
  };

  return (
    <div className=" flex w-full">
      <Avatar rounded size={"sm"} img={data.avatar}>
        <div className="w-full space-y-1 text-gray-300">
          <div className="font-bold">{data.name}</div>
          <div className=" flex justify-between gap-2">
            <div className="text-sm">{showFormattedDate(createdAt)}</div>
            <div className="text-sm">{postedAt(createdAt)}</div>
          </div>
        </div>
      </Avatar>
    </div>
  );
};

ThreadAccount.propTypes = {
  ownerId: PropTypes.string,
  createdAt: PropTypes.string,
};

export default ThreadAccount;
