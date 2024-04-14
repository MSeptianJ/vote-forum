import React from 'react';
import ICON from '../assets/imgs/load_gear.svg';

function LoadingIcon() {
  return (
    <div className="w-full m-auto h-screen">
      <img src={ICON} alt="Loading" className=" w-full h-full max-w-32 m-auto" />
    </div>
  );
}

export default LoadingIcon;
