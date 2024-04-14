import PropTypes from 'prop-types';
import React from 'react';
import useInput from '../../../hooks/useInput';

function LoginInput({ onLogin }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPassChange] = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin({ email, password });
  };

  return (
    <form className="mt-3 flex w-full flex-col gap-4" onSubmit={handleSubmit}>
      <div className="grid w-full space-y-1">
        <p htmlFor="emailLogin" className="w-full text-sm text-gray-300">
          Email
        </p>
        <input
          type="text"
          id="emailLogin"
          value={email}
          onChange={onEmailChange}
          className="w-full rounded-[4px] border border-secondary bg-transparent"
        />
      </div>

      <div className="grid w-full space-y-1">
        <p htmlFor="passLogin" className="w-full text-sm text-gray-300">
          Password
        </p>
        <input
          type="password"
          id="passLogin"
          value={password}
          onChange={onPassChange}
          className="w-full rounded-[4px] border border-secondary bg-transparent"
        />
      </div>

      <div className="mt-3 flex w-full justify-center">
        <input
          type="submit"
          value="Submit"
          className=" w-1/2 max-w-52 cursor-pointer rounded-md border border-secondary bg-secondary py-1 text-sm font-bold hover:bg-primary"
        />
      </div>
    </form>
  );
}

LoginInput.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginInput;
