import React from 'react';
import type { Preview } from '@storybook/react';
import { Rubik } from 'next/font/google';
import '../src/app/globals.css';

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  variable: '--font-rubik',
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${rubik.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
