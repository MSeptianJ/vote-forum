import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { asyncRegisterUser } from '../../store/auth-user/action';
import RegisterInput from './components/RegisterInput';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');

  const onRegister = useCallback(async ({ name, email, password }) => {
    try {
      await dispatch(asyncRegisterUser({ name, email, password }));
      navigate('/login');
    } catch (error) {
      setErrorText(error);
    }
  }, [dispatch, navigate]);

  return (
    <div className="mt-8 w-full px-5">
      <div className="mx-auto mb-5 flex w-full max-w-xl flex-col gap-2 rounded-md bg-primary p-5 text-white shadow-lg">
        <h4 className=" text-xl font-bold">Registrasi</h4>

        <div className=" w-full text-sm text-gray-300">
          <p>
            Buat sebuah akun untuk berdiskusi dengan membuat
            {' '}

            <span className=" font-bold text-white">Thread</span>
          </p>
        </div>

        <RegisterInput onRegister={onRegister} />

        {
          errorText && (
          <div className=" w-full text-center p-3">
            <p className=" text-red-600 text-xs">{errorText.message}</p>
          </div>
          )
        }

        <div className=" mt-2 flex w-full gap-1 text-xs text-gray-300">
          <p>Sudah memiliki Akun?</p>
          <Link to="/login" className=" text-accent hover:underline">
            Log In disini
          </Link>
        </div>
      </div>

    </div>
  );
}

RegisterPage.propTypes = {};

export default RegisterPage;
