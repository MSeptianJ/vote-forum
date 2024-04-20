import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  afterEach, describe, expect, it,
  vi,
} from 'vitest';
import ThreadItem from '../Thread/ThreadItem';

// ThreadItem Test
// - Display thread Info Correctly
// - Display all buttons are disabled when not Authenticated
// - Display all buttons are enabled when Authenticated
// - Should call upvote function when upvote button is clicked
// - Should call downvote function when downvote button is clicked
// - Should call neutral function when user already upvoted
// - Should call neutral function when user already downvoted

const fakeItem = {
  id: 'thread-Np47p4jhUXYhrhRn',
  title: 'Bagaimana pengalamanmu belajar Redux?',
  body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
  category: 'redux',
  createdAt: '2023-05-29T07:55:52.266Z',
  ownerId: 'jhon_doe',
  totalComments: 2,
  upVotesBy: [],
  downVotesBy: [
    'user-5d25rHmwh6xpC0G8',
  ],
  user: {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
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

function Wrapper({ children }) {
  return (
    <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
  );
}
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

describe('COMPONENT : ThreadItem', () => {
  afterEach(() => {
    cleanup();
  });

  it('Display thread Info Correctly', async () => {
    render(
      (
        <div className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg">
          <ThreadItem
            data={fakeItem}
            onDownVote={() => {}}
            onUpVote={() => {}}
            onNeutralVote={() => {}}
          />
        </div>
      ), { wrapper: Wrapper },
    );

    const userThread = await screen.getByText(fakeItem.user.name);
    const titleThread = await screen.getByText(fakeItem.title);
    const bodyThread = await screen.getByText(parse(fakeItem.body));
    const voteBtns = await screen.getByTitle('Vote Buttons');
    const commentBtn = await screen.getByTitle('Comment Button');

    expect(userThread.textContent).toEqual(fakeItem.user.name);
    expect(titleThread.textContent).toEqual(fakeItem.title);
    expect(bodyThread.textContent).toEqual(parse(fakeItem.body));
    expect(voteBtns).toBeVisible();
    expect(commentBtn).toBeVisible();
  });

  it('Display all buttons are disabled when not Authenticated', async () => {
    render(
      (
        <div className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg">
          <ThreadItem
            data={fakeItem}
            onDownVote={() => {}}
            onUpVote={() => {}}
            onNeutralVote={() => {}}
          />
        </div>
      ), { wrapper: Wrapper },
    );

    const voteBtnBox = await screen.getByTitle('Vote Buttons');
    const commentBtnBox = await screen.getByTitle('Comment Button');

    const upVoteBtn = voteBtnBox.firstChild;
    const downVoteBtn = voteBtnBox.lastChild;
    const commentBtn = commentBtnBox.firstChild;

    expect(upVoteBtn).toBeDisabled();
    expect(downVoteBtn).toBeDisabled();
    expect(commentBtn).toBeDisabled();
  });

  it('Display all buttons are enabled when Authenticated', async () => {
    render(
      (
        <div className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg">
          <ThreadItem
            data={fakeItemWithAuth}
            onDownVote={() => {}}
            onUpVote={() => {}}
            onNeutralVote={() => {}}
          />
        </div>
      ), { wrapper: Wrapper },
    );

    const voteBtnBox = await screen.getByTitle('Vote Buttons');
    const commentBtnBox = await screen.getByTitle('Comment Button');

    const upVoteBtn = voteBtnBox.firstChild;
    const downVoteBtn = voteBtnBox.lastChild;
    const commentBtn = commentBtnBox.firstChild;

    expect(upVoteBtn).toBeEnabled();
    expect(downVoteBtn).toBeEnabled();
    expect(commentBtn).toBeEnabled();
  });

  it('Should call upvote function when upvote button is clicked', async () => {
    const onUpVote = vi.fn();

    render(
      (
        <div className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg">
          <ThreadItem
            data={fakeItemWithAuth}
            onUpVote={onUpVote}
            onDownVote={() => {}}
            onNeutralVote={() => {}}
          />
        </div>
      ), { wrapper: Wrapper },
    );

    const voteBtnBox = await screen.getByTitle('Vote Buttons');
    const upVoteBtn = voteBtnBox.firstChild;

    await userEvent.click(upVoteBtn);

    expect(onUpVote).toBeCalledWith(fakeItemWithAuth.id);
  });

  it('Should call downvote function when downvote button is clicked', async () => {
    const onDownVote = vi.fn();

    render(
      (
        <div className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg">
          <ThreadItem
            data={fakeItemWithAuth}
            onUpVote={() => {}}
            onDownVote={onDownVote}
            onNeutralVote={() => {}}
          />
        </div>
      ), { wrapper: Wrapper },
    );

    const voteBtnBox = await screen.getByTitle('Vote Buttons');
    const downVoteBtn = voteBtnBox.lastChild;

    await userEvent.click(downVoteBtn);

    expect(onDownVote).toBeCalledWith(fakeItemWithAuth.id);
  });

  it('Should call neutral function when user already upvoted', async () => {
    const onUpVote = vi.fn();
    const onNeutralVote = vi.fn();

    render(
      (
        <div className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg">
          <ThreadItem
            data={fakeItemUpVoted}
            onUpVote={onUpVote}
            onDownVote={() => {}}
            onNeutralVote={onNeutralVote}
          />
        </div>
      ), { wrapper: Wrapper },
    );

    const voteBtnBox = await screen.getByTitle('Vote Buttons');

    const upVoteBtn = voteBtnBox.firstChild;

    await userEvent.click(upVoteBtn);

    expect(onUpVote).not.toBeCalledWith(fakeItemUpVoted.id);
    expect(onNeutralVote).toBeCalledWith(fakeItemUpVoted.id);
  });

  it('Should call neutral function when user already downvoted', async () => {
    const onDownVote = vi.fn();
    const onNeutralVote = vi.fn();

    render(
      (
        <div className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg">
          <ThreadItem
            data={fakeItemDownVoted}
            onUpVote={() => {}}
            onDownVote={onDownVote}
            onNeutralVote={onNeutralVote}
          />
        </div>
      ), { wrapper: Wrapper },
    );

    const voteBtnBox = await screen.getByTitle('Vote Buttons');

    const downVoteBtn = voteBtnBox.lastChild;

    await userEvent.click(downVoteBtn);

    expect(onDownVote).not.toBeCalledWith(fakeItemDownVoted.id);
    expect(onNeutralVote).toBeCalledWith(fakeItemDownVoted.id);
  });
});
