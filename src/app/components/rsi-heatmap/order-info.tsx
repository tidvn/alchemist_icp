import classNames from "classnames";

interface OderInfomationProps {
  className?: string;
}

export const OderInfomation = ({ className }: OderInfomationProps) => {
  const orderInfoClassName = classNames("hidden lg:flex gap-4", className);

  return (
    <div className="px-3 pt-6 pb-9 flex gap-3 flex-col font-bold">
      <div className="text-center mb-2 leading-7 text-lg">
        Order Information
      </div>
      <div className="flex items-center gap-4 p-2 border border-[#F6F6F6] rounded-lg">
        <div className="font-semibold text-sm text-[#111] leading-5 w-[88px]">
          Tradding Pair:
        </div>
        <div className="text-xs text-[#111] leading-5">--</div>
      </div>
      <div className="flex items-center gap-4 p-2 border border-[#F6F6F6] rounded-lg">
        <div className="font-semibold text-sm text-[#111] leading-5 w-[88px]">
          Detected Pattern:
        </div>
        <div className="text-xs text-[#111] leading-5">--</div>
      </div>
      <div className="flex items-center gap-4 p-2 border border-[#F6F6F6] rounded-lg">
        <div className="font-semibold text-sm text-[#111] leading-5 w-[88px]">
          Entry Point:
        </div>
        <div className="text-xs text-[#111] leading-5">--</div>
      </div>
      <div className="flex items-center gap-4 p-2 border border-[#F6F6F6] rounded-lg">
        <div className="font-semibold text-sm text-[#00BD46] leading-5 w-[88px]">
          Target Point:
        </div>
        <div className="text-xs text-[#111] leading-5">--</div>
      </div>
      <div className="flex items-center gap-4 p-2 border border-[#F6F6F6] rounded-lg">
        <div className="font-semibold text-sm text-[#CC0001] leading-5 w-[88px]">
          Stop Loss:
        </div>
        <div className="text-xs text-[#111] leading-5">--</div>
      </div>
      <div className="flex items-center gap-4 p-2 border border-[#F6F6F6] rounded-lg">
        <div className="font-semibold text-sm text-[#00BD46] leading-5 w-[88px]">
          Reward:
        </div>
        <div className="text-xs text-[#111] leading-5">--</div>
      </div>
      <div className="flex items-center gap-4 p-2 border border-[#F6F6F6] rounded-lg">
        <div className="font-semibold text-sm text-[#CC0001] leading-5 w-[88px]">
          Risk:
        </div>
        <div className="text-xs text-[#111] leading-5">--</div>
      </div>
      <div className="flex items-center gap-4 p-2 border border-[#F6F6F6] rounded-lg">
        <div className="font-semibold text-sm text-[#111] leading-5 w-[88px]">
          Detected on:
        </div>
        <div className="text-xs text-[#111] leading-5">--</div>
      </div>
      <div className="flex items-center gap-4 p-2 border border-[#F6F6F6] rounded-lg">
        <div className="font-semibold text-sm text-[#111] leading-5 w-[88px]">
          Status:
        </div>
        <div className="text-xs text-[#111] leading-5">--</div>
      </div>
    </div>
  );
};
