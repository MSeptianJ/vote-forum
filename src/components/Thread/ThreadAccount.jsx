import { Avatar } from "flowbite-react";
import PropTypes from "prop-types";
import { postedAt, showFormattedDate } from "../../utils/dateConverter";

const ThreadAccount = ({ ownerId, createdAt }) => {
  return (
    <div className=" flex w-full">
      <Avatar rounded size={"sm"}>
        <div className="w-full space-y-1 text-gray-300">
          <div className="font-bold">Jese Leos</div>
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
