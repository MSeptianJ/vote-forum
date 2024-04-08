import { Avatar, Dropdown } from 'flowbite-react';
import PropTypes from 'prop-types';
import React from 'react';
import { FaTrophy } from 'react-icons/fa6';
import { PiSignOutBold } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { ownerValidator } from '../utils/propValidator';

function AccountBtn({ onLogOut, userData }) {
  const leaderBoards = useSelector((states) => states.leaderBoards);

  const userScore = leaderBoards.find((data) => data.user.id === userData.id)?.score;

  const handleLogOut = () => {
    onLogOut();
  };

  return (
    <Dropdown
      label={(
        <Avatar
          rounded
          img={userData.avatar}
          className="p-2 transition-colors duration-300 hover:bg-secondary"
        />
      )}
      arrowIcon={false}
      inline
      className=" border-none bg-primary text-white"
    >
      <Dropdown.Header className=" text-white">
        <span className="block text-sm">{userData.name}</span>
        <span className="block text-sm">{userData.email}</span>
      </Dropdown.Header>
      <Dropdown.Item
        icon={FaTrophy}
        className=" border-none text-white hover:text-black"
      >
        {`Score ${userScore || 0}`}
      </Dropdown.Item>
      <Dropdown.Item
        icon={PiSignOutBold}
        className=" border-none text-white hover:text-black"
        onClick={handleLogOut}
      >
        Log Out
      </Dropdown.Item>
    </Dropdown>
  );
}

AccountBtn.propTypes = {
  onLogOut: PropTypes.func.isRequired,
  userData: PropTypes.shape(ownerValidator).isRequired,
};

export default AccountBtn;
