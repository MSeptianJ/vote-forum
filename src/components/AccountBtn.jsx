import { Avatar, Dropdown } from 'flowbite-react';
import React from 'react';
import { FaTrophy } from 'react-icons/fa6';
import { PiSignOutBold } from 'react-icons/pi';

function AccountBtn() {
  const data = {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Kaka&background=random',
  };

  return (
    <Dropdown
      label={(
        <Avatar
          rounded
          img={data.avatar}
          className="p-2 transition-colors duration-300 hover:bg-secondary"
        />
      )}
      arrowIcon={false}
      inline
      className=" border-none bg-primary text-white"
    >
      <Dropdown.Header className=" text-white">
        <span className="block text-sm">{data.name}</span>
        <span className="block text-sm">{data.email}</span>
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
      >
        Log out
      </Dropdown.Item>
    </Dropdown>
  );
}

export default AccountBtn;
