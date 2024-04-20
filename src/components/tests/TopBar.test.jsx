import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import {
  afterEach, describe, expect, it,
  vi,
} from 'vitest';
import TopBar from '../Bar/TopBar';

// TopBar Testing
// - Should Display Login Button when not Authenticated
// - Should Display Account Button when not Authenticated
// - Should call Log Out Function when log out button clicked
// - Should handle page navigation to leaderboard page
// - Should handle page navigation to home page

const fakeLeaderBoards = [
  {
    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
  {
    user: {
      id: 'users-2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 5,
  },
];

const fakeAuthUser = {
  id: 'john_doe',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

describe('COMPONENT: TopBar', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should Display Login Button when not Authenticated', async () => {
    render(
      <BrowserRouter>
        <TopBar authUser={null} onLogOut={() => {}} leaderBoards={fakeLeaderBoards} />
      </BrowserRouter>,
    );

    const loginBtn = await screen.getByTitle('Login');

    expect(loginBtn).toBeVisible();
  });

  it('Should Display Account Button when Authenticated', async () => {
    render(
      <BrowserRouter>
        <TopBar authUser={fakeAuthUser} onLogOut={() => {}} leaderBoards={fakeLeaderBoards} />
      </BrowserRouter>,
    );

    const accountBtn = await screen.getByTitle('Account');

    expect(accountBtn).toBeVisible();
  });

  it('Should Call Logout Function when log out button clicked', async () => {
    const onLogOut = vi.fn();
    render(
      <BrowserRouter>
        <TopBar authUser={fakeAuthUser} onLogOut={onLogOut} leaderBoards={fakeLeaderBoards} />
      </BrowserRouter>,
    );

    const accountBtn = await screen.getByTitle('Account');
    expect(accountBtn).toBeVisible();

    await userEvent.click(accountBtn);
    const logOutBtn = await screen.getByTitle('Log Out');

    await userEvent.click(logOutBtn);

    expect(onLogOut).toBeCalled();
  });

  it('Should handle page navigation to leaderboard page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <TopBar authUser={null} onLogOut={() => {}} leaderBoards={fakeLeaderBoards} />
      </MemoryRouter>,
    );

    const leaderboardBtn = await screen.getByTitle('Leaderboard');
    // Save the Icon on '/' which is <IconLeaderboardOutline />
    const firstChildHome = leaderboardBtn.firstChild;

    // Assert the icon are the same
    expect(leaderboardBtn.firstChild).toEqual(firstChildHome);

    // Click the Button
    await userEvent.click(leaderboardBtn);

    // Save the new Icon on '/leaderboard' which is <IconLeaderboard />
    const firstChildLeaderBoard = leaderboardBtn.firstChild;
    // Assert the /leaderboard is not the same with /home icon
    expect(firstChildHome).not.toEqual(firstChildLeaderBoard);
  });

  it('Should handle page navigation to home page', async () => {
    render(
      <MemoryRouter initialEntries={['/leaderboard']}>
        <TopBar authUser={null} onLogOut={() => {}} leaderBoards={fakeLeaderBoards} />
      </MemoryRouter>,
    );

    const homeBtn = await screen.getByTitle('Home');
    // Save the Icon on '/' which is <IconLeaderboardOutline />
    const firstChildNotHome = homeBtn.firstChild;

    // Assert the icon are the same
    expect(homeBtn.firstChild).toEqual(firstChildNotHome);

    // Click the Button
    await userEvent.click(homeBtn);

    // Save the new Icon on '/leaderboard' which is <IconLeaderboard />
    const firstChildInHome = homeBtn.firstChild;
    // Assert the /leaderboard is not the same with /home icon
    expect(firstChildInHome).not.toEqual(firstChildNotHome);
  });
});
