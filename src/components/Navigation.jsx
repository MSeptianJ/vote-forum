import LOGOTEXT from "../assets/imgs/logo_text.svg";
import AccountBtn from "./AccountBtn";

const Navigation = () => {
  return (
    <div className=" bg-primary flex h-20 w-full items-center justify-between px-1">
      <div className=" h-full">
        <img src={LOGOTEXT} alt="Logo Votrum" className=" h-full p-2" />
      </div>
      <div className=" p-2">
        <AccountBtn />
      </div>
    </div>
  );
};

export default Navigation;
