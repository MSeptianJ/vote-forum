import PropTypes from "prop-types";
import UserItem from "./UserItem";

const UserList = ({ userData }) => {
  return (
    <div className="flex w-full flex-col">
      {userData.map((data, i) => (
        <UserItem key={i} data={data} />
      ))}
    </div>
  );
};

UserList.propTypes = {
  userData: PropTypes.array.isRequired,
};

export default UserList;
