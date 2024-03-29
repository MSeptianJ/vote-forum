import { Link, useLocation } from "react-router-dom";
import LOGOTEXT from "../assets/imgs/logo_text.svg";
import {
  IconHome,
  IconHomeOutline,
  IconLeaderboard,
  IconLeaderboardOutline,
  IconLogin,
} from "../libs/icons";
import AccountBtn from "./AccountBtn";
import BtnPrimary from "./BtnPrimary";

const TopBar = () => {
  const location = useLocation();
  const user = false;

  return (
    <div className=" flex w-full items-center justify-between bg-primary px-3 md:h-16">
      <div className="h-full">
        <Link to={"/"}>
          <img
            src={LOGOTEXT}
            alt="Logo Votrum"
            className=" block h-full w-32 py-2 hover:cursor-pointer hover:bg-secondary"
          />
        </Link>
      </div>

      <div className=" flex h-full items-center justify-center gap-4 text-white">
        <nav className=" hidden h-full w-full items-center gap-4 md:flex">
          <Link to={"/"}>
            <BtnPrimary
              btnText={"Home"}
              btnStyles={
                "w-full p-4 h-full flex items-center gap-2 hover:bg-secondary"
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
                "w-full flex p-4 h-full items-center gap-2 hover:bg-secondary"
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

        {user ? (
          <AccountBtn />
        ) : (
          <div className="h-full">
            <Link to={"/login"}>
              <BtnPrimary
                btnStyles={
                  "text-xl h-full p-2 md:text-base transition-colors duration-300 hover:bg-secondary"
                }
                btnIcon={<IconLogin />}
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
