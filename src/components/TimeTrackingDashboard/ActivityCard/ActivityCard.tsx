import Image from 'next/image';

interface IconConfig {
  src: string;
  width: number;
  height: number;
  position: {
    right: string;
  };
}

interface TimeRecord {
  current: number;
  previous: number;
}

interface ActivityRecord {
  title: string;
  timeframes: {
    daily: TimeRecord;
    weekly: TimeRecord;
    monthly: TimeRecord;
  };
}

type TimeframeOption = 'daily' | 'weekly' | 'monthly';

interface ActivityCardProps {
  backgroundColor: string;
  icon: IconConfig;
  activity: ActivityRecord;
  selectedTimeframe: TimeframeOption;
}

const timeFrameLabels = {
  daily: 'Yesterday',
  weekly: 'Last Week',
  monthly: 'Last Month',
};

function ActivityCard({
  backgroundColor,
  icon,
  activity,
  selectedTimeframe,
}: Readonly<ActivityCardProps>) {
  const { title, timeframes } = activity;
  const { current, previous } = timeframes[selectedTimeframe];
  const previousLabel = timeFrameLabels[selectedTimeframe];

  return (
    <article className={`w-full h-40 rounded-[15px] ${backgroundColor}`}>
      <div className="relative h-[38px] overflow-hidden">
        <Image
          src={icon.src}
          alt=""
          width={icon.width}
          height={icon.height}
          className={`absolute ${icon.position.right}`}
        />
      </div>
      <div className="grid grid-cols-1 grid-rows-[22px_38px] gap-[6px] h-[122px] px-6 py-7 rounded-[15px] bg-dark-blue">
        <div className="flex justify-between items-center">
          <h3 className="text-card-title text-white">{title}</h3>
          <Image
            src={'/images/icon-ellipsis.svg'}
            alt=""
            width={21}
            height={5}
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-hours text-white">{current}hrs</p>
          <p className="text-previous text-pale-blue">
            {previousLabel} - {previous}hrs
          </p>
        </div>
      </div>
    </article>
  );
}

export default ActivityCard;
