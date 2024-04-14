import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext, useParams } from 'react-router-dom';
import CommentList from '../../components/Comment/CommentList';
import LoadingIcon from '../../components/LoadingIcon';
import { asyncAddComment } from '../../store/comment/action';
import { asyncGetThreadDetail } from '../../store/threadDetail/action';
import ThreadDetail from './components/ThreadDetail';

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

  const getDetail = useCallback(async () => {
    try {
      await dispatch(asyncGetThreadDetail(id));
    } catch (error) {
      setErrorText(error);
    }
  }, [dispatch, id]);

  useEffect(() => {
    getDetail();
  }, [getDetail]);

  if (!threadDetail) {
    return (
      <div>
        {
          !errorText ?
            <LoadingIcon /> : (
              <div className="w-full text-center h-screen flex justify-center items-center">
                <p className=" text-red-600">{errorText.message}</p>
              </div>
            )
}
      </div>
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
