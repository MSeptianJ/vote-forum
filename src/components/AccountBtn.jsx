import { Avatar, Dropdown } from "flowbite-react";
import { FaTrophy } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";

const AccountBtn = () => {
  return (
    <Dropdown
      label={
        <div className=" hover:bg-secondary flex items-center rounded-md p-1">
          <Avatar
            alt="User settings"
            rounded
            className=" hover:bg-secondary p-2 transition-colors"
          />
          <div className="hidden space-y-1 text-left font-medium md:block">
            <div className="text-white">Jese Leos</div>
            <div className="text-sm text-gray-200">jael@gmail.com</div>
          </div>
        </div>
      }
      arrowIcon={false}
      inline
      className=" bg-primary border-none text-white"
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
