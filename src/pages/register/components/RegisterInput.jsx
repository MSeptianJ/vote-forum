import PropTypes from 'prop-types';
import React from 'react';
import useInput from '../../../hooks/useInput';

function RegisterInput({ onRegister }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPassChange] = useInput('');

  const handleRegister = (event) => {
    event.preventDefault();
    onRegister({ name, email, password });
  };

  return (
    <form className="mt-3 flex w-full flex-col gap-4" onSubmit={handleRegister}>
      <div className="grid w-full space-y-1">
        <p htmlFor="titleThread" className="w-full text-sm text-gray-300">
          Name
        </p>
        <input
          type="text"
          id="nameRegister"
          title="Register Name"
          value={name}
          onChange={onNameChange}
          className="w-full rounded-[4px] border border-secondary bg-transparent"
        />
      </div>

      <div className="grid w-full space-y-1">
        <p htmlFor="categoryThread" className="w-full text-sm text-gray-300">
          Email
        </p>
        <input
          type="email"
          id="emailRegister"
          title="Register Email"
          value={email}
          onChange={onEmailChange}
          className="w-full rounded-[4px] border border-secondary bg-transparent"
        />
      </div>

      <div className="grid w-full space-y-1">
        <p htmlFor="categoryThread" className="w-full text-sm text-gray-300">
          Password
        </p>
        <input
          type="password"
          id="passwordRegister"
          title="Register Password"
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

RegisterInput.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default RegisterInput;
