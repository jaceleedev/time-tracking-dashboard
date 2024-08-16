import Image from 'next/image';

type TimeframeOption = 'daily' | 'weekly' | 'monthly';

interface UserProfileCardProps {
  activeTimeframe: TimeframeOption;
  onTimeframeChange: (timeframe: TimeframeOption) => void;
}

function UserProfileCard({
  activeTimeframe,
  onTimeframeChange,
}: Readonly<UserProfileCardProps>) {
  return (
    <article className="w-full h-[203px] m-auto rounded-[15px] bg-dark-blue">
      <h2 className="sr-only">User Profile Card</h2>
      <div className="flex justify-center items-center h-[133px] rounded-[15px] bg-blue">
        <div className="flex items-center gap-5">
          <Image
            src="/images/image-jeremy.png"
            alt="Jeremy Robson's profile picture"
            width={64}
            height={64}
            priority
            className="border-[3px] border-solid border-white rounded-full"
          />
          <div className="flex flex-col justify-center items-start h-[50px] pr-[1px] gap-y-1">
            <p className="text-report-title text-pale-blue">Report for</p>
            <p className="text-user-name text-white">Jeremy Robson</p>
          </div>
        </div>
      </div>
      <nav
        className="flex items-center h-[70px]"
        aria-label="Timeframe selection"
      >
        {(['daily', 'weekly', 'monthly'] as const).map((timeframe) => (
          <button
            key={timeframe}
            onClick={() => onTimeframeChange(timeframe)}
            className={`basis-1/3 text-tab hover:text-white ${activeTimeframe === timeframe ? 'text-white' : 'text-desaturated-blue'}`}
            aria-current={activeTimeframe === timeframe ? 'true' : 'false'}
          >
            {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
          </button>
        ))}
      </nav>
    </article>
  );
}

export default UserProfileCard;
