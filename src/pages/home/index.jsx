import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import LoadingIcon from '../../components/LoadingIcon';
import ThreadList from '../../components/Thread/ThreadList';
import asyncGetUsersAndThreads from '../../store/shared/action';
import HomeTopBar from './components/HomeTopBar';

function HomePage() {
  const dispatch = useDispatch();
  const users = useSelector((states) => states.users);
  const threads = useSelector((states) => states.threads);
  const auth = useSelector((states) => states.authUser);
  const { onUpVoteThread, onDownVoteThread } = useOutletContext();

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    auth: auth.id,
  }));

  useEffect(() => {
    dispatch(asyncGetUsersAndThreads());
  }, [dispatch]);

  if (!threadList) {
    <LoadingIcon />;
  }

  return (
    <div className="mt-8 w-full">
      <HomeTopBar />

      <ThreadList
        threadData={threadList}
        onUpVote={onUpVoteThread}
        onDownVote={onDownVoteThread}
      />
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
