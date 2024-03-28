import PropTypes from "prop-types";
import BtnPrimary from "../BtnPrimary";

const ThreadComment = ({ func }) => {
  return (
    <div className=" mt-6 flex flex-col text-white">
      <h4 className=" font-bold">Make a Comment</h4>
      <div
        className=" mt-4 min-h-20 rounded-md border border-secondary p-3"
        contentEditable
      />
      <div className="flex justify-end">
        <BtnPrimary
          btnText={"Reply"}
          btnStyles={
            "font-bold py-1 px-4 bg-secondary mt-3 rounded-md hover:bg-primary border border-secondary "
          }
        />
      </div>
    </div>
  );
};

ThreadComment.propTypes = {
  func: PropTypes.func,
};

export default ThreadComment;
