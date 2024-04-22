import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import parse from 'html-react-parser';
import React from 'react';
import {
  afterEach, describe, expect, it, vi,
} from 'vitest';
import CommentItem from '../Comment/CommentItem';

// CommentItem Test
// - Should display comment info correctly
// - Should display vote buttons disabled when not authenticated
// - Should display vote buttons enabled when authenticated
// - Should call upvote function when upvote button clicked
// - Should call downvote function when downvote button clicked
// - Should call neutral function when user has upvoted
// - Should call neutral function when user has downvoted

const fakeComment = {
  id: 'comment-1',
  content: 'Ini adalah komentar pertama',
  createdAt: '2021-06-21T07:00:00.000Z',
  owner: {
    id: 'users-1',
    name: 'John Doe',
    avatar: 'https://generated-image-url.jpg',
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

describe('COMPONENT: CommentItem', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should display commen info correctly', async () => {
    render((
      <div
        className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg"
      >
        <CommentItem
          auth={null}
          data={fakeComment}
          onUpVote={() => {}}
          onDownVote={() => {}}
          onNeutralVote={() => {}}
        />
      </div>
    ));

    const ownerComment = await screen.getByText(fakeComment.owner.name);
    const contentComment = await screen.getByText(parse(fakeComment.content));
    const voteBtns = await screen.getByTitle('Comment Vote Buttons');

    expect(ownerComment).toBeVisible();
    expect(contentComment).toBeVisible();
    expect(voteBtns).toBeVisible();
  });

  it('Should display vote buttons disabled when not authenticated', async () => {
    render((
      <div
        className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg"
      >
        <CommentItem
          auth={null}
          data={fakeComment}
          onUpVote={() => {}}
          onDownVote={() => {}}
          onNeutralVote={() => {}}
        />
      </div>
    ));

    const voteBtns = await screen.getByTitle('Comment Vote Buttons');
    const upVoteBtn = voteBtns.firstChild;
    const downVoteBtn = voteBtns.lastChild;

    expect(upVoteBtn).toBeDisabled();
    expect(downVoteBtn).toBeDisabled();
  });

  it('Should display vote buttons enabled when authenticated', async () => {
    render((
      <div
        className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg"
      >
        <CommentItem
          auth={fakeAuth.id}
          data={fakeComment}
          onUpVote={() => {}}
          onDownVote={() => {}}
          onNeutralVote={() => {}}
        />
      </div>
    ));

    const voteBtns = await screen.getByTitle('Comment Vote Buttons');
    const upVoteBtn = voteBtns.firstChild;
    const downVoteBtn = voteBtns.lastChild;

    expect(upVoteBtn).toBeEnabled();
    expect(downVoteBtn).toBeEnabled();
  });

  it('Should call upvote function when upvote button clicked', async () => {
    const onUpVote = vi.fn();
    render((
      <div
        className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg"
      >
        <CommentItem
          auth={fakeAuth.id}
          data={fakeComment}
          onUpVote={onUpVote}
          onDownVote={() => {}}
          onNeutralVote={() => {}}
        />
      </div>
    ));

    const voteBtns = await screen.getByTitle('Comment Vote Buttons');
    const upVoteBtn = voteBtns.firstChild;

    await userEvent.click(upVoteBtn);

    expect(onUpVote).toBeCalledWith(fakeComment.id);
  });

  it('Should call downvote function when downvote button clicked', async () => {
    const onDownVote = vi.fn();
    render((
      <div
        className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg"
      >
        <CommentItem
          auth={fakeAuth.id}
          data={fakeComment}
          onUpVote={() => {}}
          onDownVote={onDownVote}
          onNeutralVote={() => {}}
        />
      </div>
    ));

    const voteBtns = await screen.getByTitle('Comment Vote Buttons');
    const downVoteBtn = voteBtns.lastChild;

    await userEvent.click(downVoteBtn);

    expect(onDownVote).toBeCalledWith(fakeComment.id);
  });

  it('Should call call neutral function when user has upvoted', async () => {
    const onUpVote = vi.fn();
    const onNeutralVote = vi.fn();

    render((
      <div
        className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg"
      >
        <CommentItem
          auth={fakeAuth.id}
          data={fakeCommentUpvoted}
          onUpVote={onUpVote}
          onDownVote={() => {}}
          onNeutralVote={onNeutralVote}
        />
      </div>
    ));

    const voteBtns = await screen.getByTitle('Comment Vote Buttons');
    const upVoteBtn = voteBtns.firstChild;

    await userEvent.click(upVoteBtn);

    expect(onUpVote).not.toBeCalledWith(fakeCommentUpvoted.id);
    expect(onNeutralVote).toBeCalledWith(fakeCommentUpvoted.id);
  });

  it('Should call call neutral function when user has downvoted', async () => {
    const onDownVote = vi.fn();
    const onNeutralVote = vi.fn();

    render((
      <div
        className="flex w-full flex-col rounded-md bg-primary p-5 shadow-lg"
      >
        <CommentItem
          auth={fakeAuth.id}
          data={fakeCommentDownvoted}
          onUpVote={() => {}}
          onDownVote={onDownVote}
          onNeutralVote={onNeutralVote}
        />
      </div>
    ));

    const voteBtns = await screen.getByTitle('Comment Vote Buttons');
    const downVoteBtn = voteBtns.lastChild;

    await userEvent.click(downVoteBtn);

    expect(onDownVote).not.toBeCalledWith(fakeCommentUpvoted.id);
    expect(onNeutralVote).toBeCalledWith(fakeCommentUpvoted.id);
  });
});
