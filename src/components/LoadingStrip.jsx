import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function LoadingStrip() {
  return (
    <div className="w-full fixed top-0 z-20 ">
      <LoadingBar style={{ background: '#36F760' }} />
    </div>
  );
}

LoadingStrip.propTypes = {};

export default LoadingStrip;
