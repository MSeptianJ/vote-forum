import { Avatar, Dropdown } from 'flowbite-react';
import PropTypes from 'prop-types';
import React from 'react';
import { FaTrophy } from 'react-icons/fa6';
import { PiSignOutBold } from 'react-icons/pi';
import { useDispatch } from 'react-redux';
import { asyncLogoutUser } from '../store/auth-user/action';
import { ownerValidator } from '../utils/propValidator';

function AccountBtn({ userData }) {
  const dispath = useDispatch();

  const handleLogOut = () => {
    dispath(asyncLogoutUser());
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
        Score 0
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
  userData: PropTypes.shape(ownerValidator).isRequired,
};

export default AccountBtn;
