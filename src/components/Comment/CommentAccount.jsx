import PropTypes from "prop-types";
import { Avatar } from "flowbite-react";
import { postedAt, showFormattedDate } from "../../utils/dateConverter";

const CommentAccount = ({ createdAt }) => {
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

CommentAccount.propTypes = {
  createdAt: PropTypes.string.isRequired,
};

export default CommentAccount;
