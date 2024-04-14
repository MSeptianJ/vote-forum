import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext, useParams } from 'react-router-dom';
import CommentList from '../../components/Comment/CommentList';
import { asyncAddComment } from '../../store/comment/action';
import { asyncGetThreadDetail } from '../../store/threadDetail/action';
import ThreadDetail from './components/ThreadDetail';
import LoadingIcon from '../../components/LoadingIcon';

function ThreadPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [errorText, setErrorText] = useState({});
  const threadDetail = useSelector((states) => states.threadDetail);
  const auth = useSelector((states) => states.authUser);
  const {
    onUpVoteThreadDetail,
    onDownVoteThreadDetail,
    onUpVoteComment,
    onDownVoteComment,
  } = useOutletContext();

  const onComment = async (content) => {
    try {
      await dispatch(asyncAddComment(content));
    } catch (error) {
      setErrorText(error);
    }
  };

  useEffect(() => {
    dispatch(asyncGetThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) {
    return (
      <LoadingIcon />
    );
  }

  return (
    <div className="mb-5 mt-8 w-full px-5">
      <ThreadDetail
        auth={auth?.id}
        threadDetailData={threadDetail}
        onUpVote={onUpVoteThreadDetail}
        onDownVote={onDownVoteThreadDetail}
        onComment={onComment}
        commentError={errorText}
      />
      <CommentList
        auth={auth?.id}
        commentData={threadDetail.comments}
        onUpVote={onUpVoteComment}
        onDownVote={onDownVoteComment}
      />
    </div>
  );
}

ThreadPage.propTypes = {};

export default ThreadPage;
