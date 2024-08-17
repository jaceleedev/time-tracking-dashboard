import React from 'react';
import type { Preview } from '@storybook/react';
import { rubik } from '../src/app/layout';
import '../src/app/globals.css';

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
