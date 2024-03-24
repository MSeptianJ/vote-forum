import {
  BsArrowDownSquare,
  BsArrowUpSquare,
  BsFillArrowDownSquareFill,
  BsFillArrowUpSquareFill,
} from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import {
  MdHome,
  MdLeaderboard,
  MdOutlineComment,
  MdOutlineHome,
  MdOutlineLeaderboard,
  MdSearch,
} from "react-icons/md";

export const IconHome = () => {
  return <MdHome />;
};

export const IconHomeOutline = () => {
  return <MdOutlineHome />;
};

export const IconLeaderboard = () => {
  return <MdLeaderboard />;
};

export const IconLeaderboardOutline = () => {
  return <MdOutlineLeaderboard />;
};

export const IconSearch = () => {
  return <MdSearch />;
};

export const IconPlus = () => {
  return <FaPlus />;
};

export const IconVote = () => {
  return <BsFillArrowUpSquareFill />;
};

export const IconVoteOutline = () => {
  return <BsArrowUpSquare />;
};

export const IconUnvote = () => {
  return <BsFillArrowDownSquareFill />;
};

export const IconUnvoteOutline = () => {
  return <BsArrowDownSquare />;
};

export const IconComment = () => {
  return <MdOutlineComment />;
};
