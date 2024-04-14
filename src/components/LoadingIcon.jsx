import React from 'react';
import ICON from '../assets/imgs/load_gear.svg';

function LoadingIcon() {
  return (
    <div className="m-auto h-screen w-full">
      <img
        src={ICON}
        alt="Loading"
        className=" m-auto h-full w-full max-w-32"
      />
    </div>
  );
}

export default LoadingIcon;
