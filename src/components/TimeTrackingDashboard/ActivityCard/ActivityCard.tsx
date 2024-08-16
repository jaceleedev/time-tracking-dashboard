import Image from 'next/image';
import { useState } from 'react';

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
  const [isHovering, setIsHovering] = useState(false);
  const [isEllipsisHovering, setIsEllipsisHovering] = useState(false);

  const { title, timeframes } = activity;
  const { current, previous } = timeframes[selectedTimeframe];
  const previousLabel = timeFrameLabels[selectedTimeframe];

  const handleHover = (target: 'card' | 'ellipsis', hovering: boolean) => {
    if (target === 'card') {
      setIsHovering(hovering);
    } else {
      setIsEllipsisHovering(hovering);
    }
  };

  const cardClassName = `grid grid-cols-1 grid-rows-[22px_auto] gap-[6px] h-[122px] px-6 py-7 rounded-[15px] bg-dark-blue hover:cursor-pointer transition-colors lg:gap-y-6 lg:h-[199px] lg:px-[30px] lg:pt-[29px] ${isHovering && !isEllipsisHovering ? 'bg-twilight-blue' : ''}`;

  return (
    <article
      className={`w-full h-40 rounded-[15px] ${backgroundColor} lg:h-[244px]`}
    >
      <div className="relative h-[38px] overflow-hidden lg:h-[45px]">
        <Image
          src={icon.src}
          alt=""
          width={icon.width}
          height={icon.height}
          priority
          className={`absolute ${icon.position.right}`}
        />
      </div>
      <div
        onMouseEnter={() => handleHover('card', true)}
        onMouseLeave={() => handleHover('card', false)}
        aria-label={`${title} activity details`}
        className={cardClassName}
      >
        <header className="flex justify-between items-center relative z-10">
          <h3 className="text-card-title text-white">{title}</h3>
          <button
            onMouseEnter={() => handleHover('ellipsis', true)}
            onMouseLeave={() => handleHover('ellipsis', false)}
            aria-label="More options"
          >
            <Image
              src={'/images/icon-ellipsis.svg'}
              alt=""
              width={21}
              height={5}
            />
          </button>
        </header>
        <div className="flex justify-between items-center lg:flex-col lg:items-start lg:gap-y-2">
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
