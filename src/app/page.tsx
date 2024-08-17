'use client';

import useSWR from 'swr';
import ActivityCard from '@/components/TimeTrackingDashboard/ActivityCard';
import UserProfileCard from '@/components/TimeTrackingDashboard/UserProfileCard';
import { TimeframeOption, ActivityRecord } from '@/types/dashboard';
import { useState } from 'react';

function getBackgroundColor(index: number): string {
  const colors = [
    'bg-light-orange',
    'bg-soft-blue',
    'bg-light-red',
    'bg-lime-green',
    'bg-violet',
    'bg-soft-yellow',
  ];
  return colors[index % colors.length];
}

function getIconConfig(title: string): {
  src: string;
  width: number;
  height: number;
  position: { right: string };
} {
  const iconConfigs = {
    Work: {
      src: '/images/icon-work.svg',
      width: 79,
      height: 68,
      position: {
        right: 'right-[17.42px]',
      },
    },
    Play: {
      src: '/images/icon-play.svg',
      width: 90,
      height: 76,
      position: {
        right: 'right-[11px]',
      },
    },
    Study: {
      src: '/images/icon-study.svg',
      width: 79,
      height: 72,
      position: {
        right: 'right-[17.07px]',
      },
    },
    Exercise: {
      src: '/images/icon-exercise.svg',
      width: 81,
      height: 54,
      position: {
        right: 'right-[17.62px]',
      },
    },
    Social: {
      src: '/images/icon-social.svg',
      width: 75,
      height: 85,
      position: {
        right: 'right-[13.48px]',
      },
    },
    'Self Care': {
      src: '/images/icon-self-care.svg',
      width: 67,
      height: 56,
      position: {
        right: 'right-[13.48px]',
      },
    },
  };

  return iconConfigs[title as keyof typeof iconConfigs];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const [activeTimeframe, setActiveTimeframe] =
    useState<TimeframeOption>('weekly');
  const { data, error, isLoading } = useSWR<ActivityRecord[]>(
    '/api/activities',
    fetcher
  );

  if (error) {
    return <div>failed to load</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <main className="grid grid-cols-1 gap-y-6 w-[327px] sm:grid-cols-2 sm:gap-x-5 sm:w-[620px] lg:grid-cols-4 lg:gap-[30px] lg:w-[1110px]">
      <h1 className="sr-only">Time tracking dashboard</h1>
      <UserProfileCard
        activeTimeframe={activeTimeframe}
        onTimeframeChange={setActiveTimeframe}
      />
      {data?.map((activity, index) => (
        <ActivityCard
          key={activity.title}
          backgroundColor={getBackgroundColor(index)}
          icon={getIconConfig(activity.title)}
          activity={activity}
          selectedTimeframe={activeTimeframe}
        />
      ))}
    </main>
  );
}
