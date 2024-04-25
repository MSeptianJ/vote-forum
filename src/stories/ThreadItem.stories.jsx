import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ThreadItem from '../components/Thread/ThreadItem';

const fakeItem = {
  id: 'thread-Np47p4jhUXYhrhRn',
  title: 'Bagaimana pengalamanmu belajar Redux?',
  body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
  category: 'redux',
  createdAt: '2023-05-29T07:55:52.266Z',
  ownerId: 'jhon_doe',
  totalComments: 2,
  upVotesBy: [],
  downVotesBy: [],
  user: {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://ui-avatars.com/api/?name=john_doe&background=random',
  },
  auth: null,
};

const fakeItemWithAuth = {
  ...fakeItem,
  auth: 'john_doe',
};

const fakeItemUpVoted = {
  ...fakeItemWithAuth,
  upVotesBy: [
    'john_doe',
  ],
};

const fakeItemDownVoted = {
  ...fakeItemWithAuth,
  downVotesBy: [
    'john_doe',
  ],
};

export default {
  title: 'Thread/ThreadItem',
  component: ThreadItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const NotAuthenticated = {
  render: () => (
    <BrowserRouter>
      <div className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg">
        <ThreadItem
          data={fakeItem}
          onUpVote={() => {}}
          onDownVote={() => {}}
          onNeutralVote={() => {}}
        />
      </div>
    </BrowserRouter>
  ),
};

export const Authenticated = {
  render: () => (
    <BrowserRouter>
      <div className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg">
        <ThreadItem
          data={fakeItemWithAuth}
          onUpVote={() => {}}
          onDownVote={() => {}}
          onNeutralVote={() => {}}
        />
      </div>
    </BrowserRouter>
  ),
};

export const AuthenticatedUpVoted = {
  render: () => (
    <BrowserRouter>
      <div className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg">
        <ThreadItem
          data={fakeItemUpVoted}
          onUpVote={() => {}}
          onDownVote={() => {}}
          onNeutralVote={() => {}}
        />
      </div>
    </BrowserRouter>
  ),
};

export const AuthenticatedDownVoted = {
  render: () => (
    <BrowserRouter>
      <div className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg">
        <ThreadItem
          data={fakeItemDownVoted}
          onUpVote={() => {}}
          onDownVote={() => {}}
          onNeutralVote={() => {}}
        />
      </div>
    </BrowserRouter>
  ),
};
