import PropTypes from "prop-types";

const BtnPrimary = ({
  btnDisabled,
  btnStyles,
  btnFunction,
  btnIcon,
  btnText,
}) => {
  const handleBtnClick = () => {
    if (btnFunction) {
      btnFunction();
    }
  };

  return (
    <button
      className={` block cursor-pointer font-bold transition-colors duration-300 ${btnStyles}`}
      onClick={handleBtnClick}
      title={btnText}
      disabled={btnDisabled}
    >
      {btnIcon}
      {btnText || ""}
    </button>
  );
};

BtnPrimary.propTypes = {
  btnStyles: PropTypes.string,
  btnText: PropTypes.string,
  btnFunction: PropTypes.func,
  btnDisabled: PropTypes.bool,
  btnIcon: PropTypes.object,
};

export default BtnPrimary;
