import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import UserProfileCard from './UserProfileCard';
import { useState } from 'react';

const meta = {
  component: UserProfileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    activeTimeframe: {
      description: 'Currently active timeframe',
      control: 'select',
      options: ['daily', 'weekly', 'monthly'],
    },
    onTimeframeChange: {
      description: 'Function to call when timeframe is changed',
    },
  },
  args: {
    onTimeframeChange: fn(),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '327px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UserProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeTimeframe: 'weekly',
  },
};

export const Active: Story = {
  render: () => {
    const [activeTimeframe, setActiveTimeframe] = useState<
      'daily' | 'weekly' | 'monthly'
    >('weekly');
    return (
      <UserProfileCard
        activeTimeframe={activeTimeframe}
        onTimeframeChange={setActiveTimeframe}
      />
    );
  },
  args: {
    activeTimeframe: 'weekly',
  },
};
