import React from 'react';
import CommentItem from '../components/Comment/CommentItem';

const fakeComment = {
  id: 'comment-1',
  content: 'Ini adalah komentar pertama',
  createdAt: '2021-06-21T07:00:00.000Z',
  owner: {
    id: 'users-1',
    name: 'John Doe',
    avatar: 'https://ui-avatars.com/api/?name=john_doe&background=random',
  },
  upVotesBy: [],
  downVotesBy: [],
};

const fakeCommentUpvoted = {
  ...fakeComment,
  upVotesBy: ['john_doe'],
};

const fakeCommentDownvoted = {
  ...fakeComment,
  downVotesBy: ['john_doe'],
};

const fakeAuth = {
  id: 'john_doe',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

export default {
  title: 'Thread/CommentItem',
  component: CommentItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const NotAuthenticated = {
  render: () => (
    <div className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg">
      <CommentItem
        auth={null}
        data={fakeComment}
        onUpVote={() => {}}
        onDownVote={() => {}}
        onNeutralVote={() => {}}
      />
    </div>
  ),
};

export const Authenticated = {
  render: () => (
    <div className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg">
      <CommentItem
        auth={fakeAuth.id}
        data={fakeComment}
        onUpVote={() => {}}
        onDownVote={() => {}}
        onNeutralVote={() => {}}
      />
    </div>
  ),
};

export const AuthenticatedUpVoted = {
  render: () => (
    <div className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg">
      <CommentItem
        auth={fakeAuth.id}
        data={fakeCommentUpvoted}
        onUpVote={() => {}}
        onDownVote={() => {}}
        onNeutralVote={() => {}}
      />
    </div>
  ),
};

export const AuthenticatedDownVoted = {
  render: () => (
    <div className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg">
      <CommentItem
        auth={fakeAuth.id}
        data={fakeCommentDownvoted}
        onUpVote={() => {}}
        onDownVote={() => {}}
        onNeutralVote={() => {}}
      />
    </div>
  ),
};
