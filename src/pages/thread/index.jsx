import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext, useParams } from 'react-router-dom';
import CommentList from '../../components/Comment/CommentList';
import { asyncAddComment } from '../../store/comment/action';
import { asyncGetThreadDetail } from '../../store/threadDetail/action';
import ThreadDetail from './components/ThreadDetail';

function ThreadPage() {
  const { id } = useParams();
  const [errorText, setErrorText] = useState({});
  const dispatch = useDispatch();
  const threadDetail = useSelector((states) => states.threadDetail);
  const {
    onUpVoteThreadDetail, onDownVoteThreadDetail, onUpVoteComment, onDownVoteComment,
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
      <p>No Thread Found</p>
    );
  }

  return (
    <div className="mb-5 mt-8 w-full px-5">
      <ThreadDetail
        threadDetailData={threadDetail}
        onUpVote={onUpVoteThreadDetail}
        onDownVote={onDownVoteThreadDetail}
        onComment={onComment}
        commentError={errorText}
      />
      <CommentList
        commentData={threadDetail.comments}
        onUpVote={onUpVoteComment}
        onDownVote={onDownVoteComment}
      />
    </div>
  );
}

ThreadPage.propTypes = {};

export default ThreadPage;
