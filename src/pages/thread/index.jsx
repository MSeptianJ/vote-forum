import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext, useParams } from 'react-router-dom';
import CommentList from '../../components/Comment/CommentList';
import { asyncGetThreadDetail } from '../../store/threadDetail/action';
import ThreadDetail from './components/ThreadDetail';

function ThreadPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const threadDetail = useSelector((states) => states.threadDetail);
  const {
    onUpVoteThreadDetail, onDownVoteThreadDetail, onUpVoteComment, onDownVoteComment,
  } = useOutletContext();

  const onComment = () => {
    console.log('Comments');
  };

  useEffect(() => {
    dispatch(asyncGetThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) {
    return null;
  }

  return (
    <div className="mb-5 mt-8 w-full px-5">
      <ThreadDetail
        threadDetailData={threadDetail}
        onUpVote={onUpVoteThreadDetail}
        onDownVote={onDownVoteThreadDetail}
        onComment={onComment}
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
