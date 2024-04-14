import PropTypes from 'prop-types';
import React from 'react';

function BtnPrimary({
  btnDisabled, btnStyles, btnFunction, btnIcon, btnText,
}) {
  const handleBtnClick = () => {
    if (btnFunction) {
      btnFunction();
    }
  };

  return (
    <button
      type="button"
      className={` block cursor-pointer font-bold transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${btnStyles}`}
      onClick={handleBtnClick}
      title={btnText}
      disabled={btnDisabled}
    >
      {btnIcon}
      {btnText || ''}
    </button>
  );
}

BtnPrimary.propTypes = {
  btnStyles: PropTypes.string,
  btnText: PropTypes.string,
  btnFunction: PropTypes.func,
  btnDisabled: PropTypes.bool,
  btnIcon: PropTypes.node,
};

BtnPrimary.defaultProps = {
  btnStyles: '',
  btnText: '',
  btnFunction: null,
  btnDisabled: false,
  btnIcon: null,
};

export default BtnPrimary;
