import { describe, afterEach, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import ActivityCard from './ActivityCard';

expect.extend(toHaveNoViolations);

const mockIcon = {
  src: '/images/icon-work.svg',
  width: 79,
  height: 78,
  position: {
    right: 'right-[17.42px]',
  },
};

describe('ActivityCard', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  // 1. Rendering test
  it('renders correctly', () => {
    const mockActivity = {
      title: 'Work',
      timeframes: {
        daily: { current: 5, previous: 7 },
        weekly: { current: 32, previous: 36 },
        monthly: { current: 103, previous: 128 },
      },
    };
    render(
      <ActivityCard
        backgroundColor="bg-light-orange"
        icon={mockIcon}
        activity={mockActivity}
        selectedTimeframe="weekly"
      />
    );
    const title = screen.getByText('Work');
    const hours = screen.getByText('32hrs');
    const previousHours = screen.getByText('Last Week - 36hrs');
    expect(title).toBeDefined();
    expect(hours).toBeDefined();
    expect(previousHours).toBeDefined();
  });

  // 2. Props test
  it('displays correct data based on selectedTimeframe', () => {
    const mockActivity = {
      title: 'Work',
      timeframes: {
        daily: { current: 6, previous: 8 },
        weekly: { current: 33, previous: 37 },
        monthly: { current: 104, previous: 129 },
      },
    };
    render(
      <ActivityCard
        backgroundColor="bg-light-orange"
        icon={mockIcon}
        activity={mockActivity}
        selectedTimeframe="daily"
      />
    );
    const hours = screen.getByText('6hrs');
    const previousHours = screen.getByText('Yesterday - 8hrs');
    expect(hours).toBeDefined();
    expect(previousHours).toBeDefined();
  });

  // 3. Styles test
  it('applies the correct background color', () => {
    const mockActivity = {
      title: 'Work',
      timeframes: {
        daily: { current: 7, previous: 9 },
        weekly: { current: 34, previous: 38 },
        monthly: { current: 105, previous: 130 },
      },
    };
    const { container } = render(
      <ActivityCard
        backgroundColor="bg-light-orange"
        icon={mockIcon}
        activity={mockActivity}
        selectedTimeframe="weekly"
      />
    );
    const article = container.firstElementChild!;
    const icon = container.querySelector('img')!;
    expect(article.className).toContain('bg-light-orange');
    expect(icon).toHaveProperty('src');
    expect(icon.className).toContain('absolute');
  });

  // 4. Accessibility test
  it('has no accessibility violations', async () => {
    const mockActivity = {
      title: 'Work',
      timeframes: {
        daily: { current: 8, previous: 10 },
        weekly: { current: 35, previous: 39 },
        monthly: { current: 106, previous: 131 },
      },
    };
    const { container } = render(
      <ActivityCard
        backgroundColor="bg-light-orange"
        icon={mockIcon}
        activity={mockActivity}
        selectedTimeframe="weekly"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 5. Snapshot test
  it('matches snapshot', () => {
    const mockActivity = {
      title: 'Work',
      timeframes: {
        daily: { current: 9, previous: 11 },
        weekly: { current: 36, previous: 40 },
        monthly: { current: 107, previous: 132 },
      },
    };
    const { asFragment } = render(
      <ActivityCard
        backgroundColor="bg-light-orange"
        icon={mockIcon}
        activity={mockActivity}
        selectedTimeframe="weekly"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
