import { Link, useLocation } from "react-router-dom";
import LOGOTEXT from "../assets/imgs/logo_text.svg";
import {
  IconHome,
  IconHomeOutline,
  IconLeaderboard,
  IconLeaderboardOutline,
} from "../libs/icons";
import AccountBtn from "./AccountBtn";
import BtnPrimary from "./BtnPrimary";

const TopBar = () => {
  const location = useLocation();

  return (
    <div className=" flex h-20 w-full items-center justify-between bg-primary px-1 md:h-16 lg:px-3">
      <div className=" h-full">
        <img
          src={LOGOTEXT}
          alt="Logo Votrum"
          className=" h-full p-2 hover:cursor-pointer hover:bg-secondary"
        />
      </div>

      <div className=" flex h-full items-center justify-center text-white">
        <nav className=" hidden h-full w-full items-center md:flex">
          <Link to={"/"}>
            <BtnPrimary
              btnText={"Home"}
              btnStyles={
                "w-full p-4 text-lg flex items-center gap-2 hover:bg-secondary"
              }
              btnIcon={
                location.pathname === "/" ? <IconHome /> : <IconHomeOutline />
              }
            />
          </Link>
          <Link to={"/leaderboard"}>
            <BtnPrimary
              btnText={"Leaderboard"}
              btnStyles={
                "w-full p-4 flex text-lg items-center gap-2 hover:bg-secondary"
              }
              btnIcon={
                location.pathname === "/leaderboard" ? (
                  <IconLeaderboard />
                ) : (
                  <IconLeaderboardOutline />
                )
              }
            />
          </Link>
        </nav>

        <AccountBtn />
      </div>
    </div>
  );
};

export default TopBar;
