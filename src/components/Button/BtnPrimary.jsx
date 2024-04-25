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
  /**  The Text inside button */
  btnText: PropTypes.string,
  /** The Icon inside button, will be on the left side of text. Fill with React Icon Elements */
  btnIcon: PropTypes.node,
  /** The button's style such as bg color or border and other, need to be assign here  */
  btnStyles: PropTypes.string,
  /** The On Click function of Button */
  btnFunction: PropTypes.func,
  /** when true button will be disabled */
  btnDisabled: PropTypes.bool,
};

BtnPrimary.defaultProps = {
  btnStyles: '',
  btnText: '',
  btnFunction: null,
  btnDisabled: false,
  btnIcon: null,
};

export default BtnPrimary;
