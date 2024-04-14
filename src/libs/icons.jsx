import React from 'react';
import {
  BsArrowDownSquare,
  BsArrowUpSquare,
  BsFillArrowDownSquareFill,
  BsFillArrowUpSquareFill,
} from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa6';
import {
  MdHome,
  MdLeaderboard,
  MdLogin,
  MdOutlineComment,
  MdOutlineHome,
  MdOutlineLeaderboard,
  MdSearch,
} from 'react-icons/md';

export function IconHome() {
  return <MdHome />;
}

export function IconHomeOutline() {
  return <MdOutlineHome />;
}

export function IconLeaderboard() {
  return <MdLeaderboard />;
}

export function IconLeaderboardOutline() {
  return <MdOutlineLeaderboard />;
}

export function IconSearch() {
  return <MdSearch />;
}

export function IconPlus() {
  return <FaPlus />;
}

export function IconVote() {
  return <BsFillArrowUpSquareFill />;
}

export function IconVoteOutline() {
  return <BsArrowUpSquare />;
}

export function IconUnvote() {
  return <BsFillArrowDownSquareFill />;
}

export function IconUnvoteOutline() {
  return <BsArrowDownSquare />;
}

export function IconComment() {
  return <MdOutlineComment />;
}

export function IconLogin() {
  return <MdLogin />;
}
