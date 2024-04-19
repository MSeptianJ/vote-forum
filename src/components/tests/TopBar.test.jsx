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
// - should handle page navigation to leaderboard page
// - should handle page navigation to home page
// - Should Display Login Button when not Authenticated

vi.mock('react-redux', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
  };
});

describe('COMPONENT: TopBar', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should Display Login Button when not Authenticated', async () => {
    render(
      <BrowserRouter>
        <TopBar authUser={null} onLogOut={() => {}} />
      </BrowserRouter>,
    );

    const logoElement = await screen.getByAltText('Logo Votrum');
    const homeBtn = await screen.getByTitle('Home');
    const leaderboardBtn = await screen.getByTitle('Leaderboard');
    const loginBtn = await screen.getByTitle('Login');

    expect(logoElement).toBeVisible();
    expect(homeBtn).toBeVisible();
    expect(leaderboardBtn).toBeVisible();
    expect(loginBtn).toBeVisible();
  });

  it('Should handle page navigation to leaderboard page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <TopBar authUser={null} onLogOut={() => {}} />
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
        <TopBar authUser={null} onLogOut={() => {}} />
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
