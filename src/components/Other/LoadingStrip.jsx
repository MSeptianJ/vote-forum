import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function LoadingStrip() {
  return (
    <div className="fixed top-0 z-20 w-full ">
      <LoadingBar style={{ background: '#36F760' }} />
    </div>
  );
}

LoadingStrip.propTypes = {};

export default LoadingStrip;
