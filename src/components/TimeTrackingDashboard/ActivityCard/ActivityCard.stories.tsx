import type { Meta, StoryObj } from '@storybook/react';
import ActivityCard from './ActivityCard';

const meta = {
  component: ActivityCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      description: 'Background color class for the card',
      control: 'text',
    },
    icon: {
      description: 'Icon configuration for the activity',
    },
    activity: {
      description: 'Activity data including title and timeframes',
    },
    selectedTimeframe: {
      description: 'Currently selected timeframe',
      control: 'select',
      options: ['daily', 'weekly', 'monthly'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '327px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ActivityCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseActivity = {
  timeframes: {
    daily: { current: 5, previous: 7 },
    weekly: { current: 32, previous: 36 },
    monthly: { current: 103, previous: 128 },
  },
};

export const Work: Story = {
  args: {
    backgroundColor: 'bg-light-orange',
    icon: {
      src: '/images/icon-work.svg',
      width: 79,
      height: 68,
      position: {
        right: 'right-[17.42px]',
      },
    },
    activity: {
      ...baseActivity,
      title: 'Work',
    },
    selectedTimeframe: 'weekly',
  },
};

export const Play: Story = {
  args: {
    backgroundColor: 'bg-soft-blue',
    icon: {
      src: '/images/icon-play.svg',
      width: 90,
      height: 76,
      position: {
        right: 'right-[11px]',
      },
    },
    activity: {
      ...baseActivity,
      title: 'Play',
      timeframes: {
        ...baseActivity.timeframes,
        weekly: { current: 10, previous: 8 },
      },
    },
    selectedTimeframe: 'weekly',
  },
};

export const Study: Story = {
  args: {
    backgroundColor: 'bg-light-red',
    icon: {
      src: '/images/icon-study.svg',
      width: 79,
      height: 72,
      position: {
        right: 'right-[17.07px]',
      },
    },
    activity: {
      ...baseActivity,
      title: 'Study',
      timeframes: {
        ...baseActivity.timeframes,
        weekly: { current: 4, previous: 7 },
      },
    },
    selectedTimeframe: 'weekly',
  },
};

export const Exercise: Story = {
  args: {
    backgroundColor: 'bg-lime-green',
    icon: {
      src: '/images/icon-exercise.svg',
      width: 81,
      height: 54,
      position: {
        right: 'right-[17.62px]',
      },
    },
    activity: {
      ...baseActivity,
      title: 'Exercise',
      timeframes: {
        ...baseActivity.timeframes,
        weekly: { current: 4, previous: 5 },
      },
    },
    selectedTimeframe: 'weekly',
  },
};

export const Social: Story = {
  args: {
    backgroundColor: 'bg-violet',
    icon: {
      src: '/images/icon-social.svg',
      width: 75,
      height: 85,
      position: {
        right: 'right-[13.48px]',
      },
    },
    activity: {
      ...baseActivity,
      title: 'Social',
      timeframes: {
        ...baseActivity.timeframes,
        weekly: { current: 5, previous: 10 },
      },
    },
    selectedTimeframe: 'weekly',
  },
};

export const SelfCare: Story = {
  args: {
    backgroundColor: 'bg-soft-yellow',
    icon: {
      src: '/images/icon-self-care.svg',
      width: 67,
      height: 56,
      position: {
        right: 'right-[13.48px]',
      },
    },
    activity: {
      ...baseActivity,
      title: 'Self Care',
      timeframes: {
        ...baseActivity.timeframes,
        weekly: { current: 2, previous: 2 },
      },
    },
    selectedTimeframe: 'weekly',
  },
};
