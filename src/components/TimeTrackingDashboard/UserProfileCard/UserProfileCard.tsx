import Image from 'next/image';
import { TimeframeOption } from '@/types/dashboard';

interface UserProfileCardProps {
  activeTimeframe: TimeframeOption;
  onTimeframeChange: (timeframe: TimeframeOption) => void;
}

function UserProfileCard({
  activeTimeframe,
  onTimeframeChange,
}: Readonly<UserProfileCardProps>) {
  return (
    <article className="w-full h-[203px] rounded-[15px] bg-dark-blue sm:col-span-2 sm:w-3/5 sm:mx-auto lg:col-span-1 lg:w-full lg:h-[518px] lg:row-span-2">
      <h2 className="sr-only">User Profile Card</h2>
      <div className="flex justify-center items-center h-[133px] rounded-[15px] bg-blue lg:justify-start lg:items-start lg:h-[354px] lg:pl-8 lg:pt-[37px]">
        <div className="flex items-center gap-5 lg:flex-col lg:items-start  lg:gap-[43px]">
          <Image
            src="/images/image-jeremy.png"
            alt="Jeremy Robson's profile picture"
            width={64}
            height={64}
            priority
            className="border-[3px] border-solid border-white rounded-full lg:w-[78px] lg:h-[78px]"
          />
          <div className="flex flex-col justify-center items-start h-[50px] pr-[1px] gap-y-1 lg:justify-start lg:w-[138px] lg:h-[116px] lg:gap-y-[3px] ">
            <p className="text-report-title text-pale-blue">Report for</p>
            <p className="text-user-name text-white">Jeremy Robson</p>
          </div>
        </div>
      </div>
      <nav
        className="flex items-center h-[70px] lg:flex-col lg:items-start lg:gap-y-[21px] lg:h-[164px] lg:pt-[26px] lg:pl-8 lg:pb-8"
        aria-label="Timeframe selection"
      >
        {(['daily', 'weekly', 'monthly'] as const).map((timeframe) => (
          <button
            key={timeframe}
            onClick={() => onTimeframeChange(timeframe)}
            className={`basis-1/3 text-tab hover:text-white ${activeTimeframe === timeframe ? 'text-white' : 'text-desaturated-blue'}`}
            aria-current={activeTimeframe === timeframe ? 'true' : 'false'}
            aria-label={`View ${timeframe} Report`}
          >
            {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
          </button>
        ))}
      </nav>
    </article>
  );
}

export default UserProfileCard;
