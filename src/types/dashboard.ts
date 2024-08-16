export type TimeframeOption = 'daily' | 'weekly' | 'monthly';

export interface TimeRecord {
  current: number;
  previous: number;
}

export interface ActivityRecord {
  title: string;
  timeframes: {
    daily: TimeRecord;
    weekly: TimeRecord;
    monthly: TimeRecord;
  };
}

export interface IconConfig {
  src: string;
  width: number;
  height: number;
  position: {
    right: string;
  };
}
