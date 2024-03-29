import PropTypes from "prop-types";

const LoginInput = () => {
  return (
    <form className="mt-3 flex w-full flex-col gap-4">
      <div className="grid w-full space-y-1">
        <label htmlFor="emailLogin" className="w-full text-sm text-gray-300">
          Email
        </label>
        <input
          type="text"
          id="emailLogin"
          className="w-full rounded-[4px] border border-secondary bg-transparent"
        />
      </div>

      <div className="grid w-full space-y-1">
        <label htmlFor="passLogin" className="w-full text-sm text-gray-300">
          Password
        </label>
        <input
          type="password"
          id="passLogin"
          className="w-full rounded-[4px] border border-secondary bg-transparent"
        />
      </div>

      <div className="mt-3 flex w-full justify-center">
        <input
          type="submit"
          value="Submit"
          className=" w-1/2 max-w-52 rounded-md border border-secondary bg-secondary py-1 text-sm font-bold hover:bg-primary"
        />
      </div>
    </form>
  );
};

LoginInput.propTypes = {};

export default LoginInput;
