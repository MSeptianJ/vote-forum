import { Avatar, Dropdown } from "flowbite-react";
import { FaTrophy } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";

const AccountBtn = () => {
  return (
    <Dropdown
      label={
        <div className=" flex items-center gap-2 transition-colors duration-300 hover:bg-secondary">
          <Avatar
            alt="User settings"
            rounded
            className=" p-2 transition-colors hover:bg-secondary"
          />
          <div className="hidden space-y-1 px-2 text-left md:block">
            <div className="text-sm text-white">Jael</div>
            <div className="text-sm text-gray-300">jael@gmail.com</div>
          </div>
        </div>
      }
      arrowIcon={false}
      inline
      className=" border-none bg-primary text-white"
    >
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
};

export default AccountBtn;
