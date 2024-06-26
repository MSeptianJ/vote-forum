import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncAddThread } from '../../store/thread/action';
import SubmitInput from './components/SubmitInput';

function SubmitPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((states) => states.authUser);
  const [errorText, setErrorText] = useState('');

  const onSubmitThread = useCallback(
    async ({ title, category, body }) => {
      try {
        await dispatch(asyncAddThread({ title, category, body }));
        navigate('/');
      } catch (error) {
        setErrorText(error);
      }
    },
    [dispatch, navigate],
  );

  return (
    <div className="mt-8 w-full px-5">
      <div className="mx-auto mb-5 flex w-full max-w-xl flex-col gap-2 rounded-md bg-primary p-5 text-white shadow-lg">
        <h4 className=" text-xl font-bold">New Thread</h4>

        <div className=" w-full text-sm text-gray-300">
          <p>
            Ayo berdiskusi dengan yang lain dengan membuat
            {' '}
            <span className=" font-bold text-white">Thread</span>
          </p>
        </div>

        {errorText && (
          <div className=" w-full rounded-[4px] bg-red-600 py-2 text-center">
            <p className=" text-xs ">{errorText.message}</p>
          </div>
        )}

        <SubmitInput auth={auth?.id} onSubmitThread={onSubmitThread} />
      </div>
    </div>
  );
}

SubmitPage.propTypes = {};

export default SubmitPage;
