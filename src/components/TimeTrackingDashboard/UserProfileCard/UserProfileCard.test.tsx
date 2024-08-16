import { describe, afterEach, expect, it, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import UserProfileCard from './UserProfileCard';

expect.extend(toHaveNoViolations);

describe('UserProfileCard', () => {
  const mockOnTimeframeChange = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  // 1. Rendering test
  it('renders correctly', () => {
    render(
      <UserProfileCard
        activeTimeframe="weekly"
        onTimeframeChange={mockOnTimeframeChange}
      />
    );

    const userName = screen.getByText('Jeremy Robson');
    const reportFor = screen.getByText('Report for');
    const dailyButton = screen.getByText('Daily');
    const weeklyButton = screen.getByText('Weekly');
    const monthlyButton = screen.getByText('Monthly');

    expect(userName).toBeDefined();
    expect(reportFor).toBeDefined();
    expect(dailyButton).toBeDefined();
    expect(weeklyButton).toBeDefined();
    expect(monthlyButton).toBeDefined();
  });

  // 2. Props test
  it('applies correct styles based on activeTimeframe prop', () => {
    render(
      <UserProfileCard
        activeTimeframe="weekly"
        onTimeframeChange={mockOnTimeframeChange}
      />
    );

    const weeklyButton = screen.getByText('Weekly');
    const dailyButton = screen.getByText('Daily');

    expect(weeklyButton.className).toContain('text-white');
    expect(weeklyButton.getAttribute('aria-current')).toBe('true');
    expect(dailyButton.className).toContain('text-desaturated-blue');
    expect(dailyButton.getAttribute('aria-current')).toBe('false');
  });

  // 3. Styles test
  it('renders the profile image with correct styles', () => {
    render(
      <UserProfileCard
        activeTimeframe="weekly"
        onTimeframeChange={mockOnTimeframeChange}
      />
    );

    const profileImage = screen.getByAltText("Jeremy Robson's profile picture");

    expect(profileImage).toBeDefined();
    expect(profileImage).toHaveProperty('src');
    expect(profileImage.className).toContain(
      'border-[3px] border-solid border-white rounded-full'
    );
  });

  // 4. Behavior test
  it('calls onTimeframeChange when a timeframe button is clicked', () => {
    render(
      <UserProfileCard
        activeTimeframe="weekly"
        onTimeframeChange={mockOnTimeframeChange}
      />
    );

    const dailyButton = screen.getByText('Daily');
    fireEvent.click(dailyButton);
    expect(mockOnTimeframeChange).toHaveBeenCalledWith('daily');

    const monthlyButton = screen.getByText('Monthly');
    fireEvent.click(monthlyButton);
    expect(mockOnTimeframeChange).toHaveBeenCalledWith('monthly');
  });

  // 5. Accessibility test
  it('has no accessibility violations', async () => {
    const { container } = render(
      <UserProfileCard
        activeTimeframe="weekly"
        onTimeframeChange={mockOnTimeframeChange}
      />
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 6. Snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(
      <UserProfileCard
        activeTimeframe="weekly"
        onTimeframeChange={mockOnTimeframeChange}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
