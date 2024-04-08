import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { asyncLoginUser } from '../../store/auth-user/action';
import LoginInput from './components/LoginInput';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');

  const onLogin = useCallback(async ({ email, password }) => {
    try {
      await dispatch(asyncLoginUser({ email, password }));
      navigate('/');
    } catch (error) {
      setErrorText(error);
    }
  }, [dispatch, navigate]);

  return (
    <div className="mt-8 w-full px-5">
      <div className="mx-auto mb-5 flex w-full max-w-xl flex-col gap-2 rounded-md bg-primary p-5 text-white shadow-lg">
        <h4 className=" text-xl font-bold">Log In</h4>

        <div className=" w-full text-sm text-gray-300">
          <p>
            Anda harus melakukan login untuk membuat
            {' '}

            <span className=" font-bold text-white">Thread</span>
          </p>
        </div>

        {
          errorText && (
          <div className=" w-full text-center py-2 bg-red-600 rounded-[4px]">
            <p className=" text-xs ">{errorText.message}</p>
          </div>
          )
        }

        <LoginInput onLogin={onLogin} />

        <div className=" mt-2 flex w-full gap-1 text-xs text-gray-300">
          <p>Tidak memiliki akun?</p>
          <Link to="/register" className=" text-accent hover:underline">
            Register disini
          </Link>
        </div>
      </div>
    </div>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
