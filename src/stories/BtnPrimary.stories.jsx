import React from 'react';
import BtnPrimary from '../components/Button/BtnPrimary';
import { IconHome } from '../libs/icons';

export default {
  title: 'Button/BtnPrimary',
  component: BtnPrimary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const STYLE = 'w-full px-4 py-2 h-full flex text-white items-center gap-2 bg-primary rounded-[4px] hover:bg-secondary';

export const OnlyText = {
  args: {
    btnStyles: STYLE,
    btnText: 'Home',
  },
};

export const OnlyIcon = {
  args: {
    btnStyles: STYLE,
    btnIcon: <IconHome />,
  },
};

export const TextWithIcon = {
  args: {
    btnStyles: STYLE,
    btnIcon: <IconHome />,
    btnText: 'Home',
  },
};

export const Disabled = {
  args: {
    btnStyles: STYLE,
    btnText: 'Home',
    btnDisabled: true,
  },
};
