import { Button } from "antd";
import Link from "next/link";

export const TradeWithCandleStick = () => {
  return (
    <div className="p-6 md:px-4 flex flex-col justify-between gap-4">
      <div className="text-[#111] font-bold text-lg text-center">
        How to trade with Heatmap
      </div>
      <div className="p-2 flex justify-between items-center border border-[#F6F6F6] rounded-lg">
        <div className="text-sm font-semibold leadin-5 text-[#111]">
          Signal:
        </div>
        <div className="flex justify-center items-center text-xs leading-5 text-[#1A64F0] gap-3">
          <div>Relative</div>
          <div>Strength</div>
          <div>Index</div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          type="primary"
          size="large"
          className="!p-2 !h-14 !w-full !text-xs sm:!w-[300px] lg:!w-full"
        >
          <div>
            No idea what <span className="!font-bold">Tweezer Top</span> is?
          </div>
          <Link href="#" className="font-bold">
            Learn now!
          </Link>
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="text-center text-[#7D7D7D] text-xs leading-5 w-full sm:w-[250px]">
          Got a strategy? Turn it into an algorithm with{" "}
          <span className="text-[#1A64F0] font-semibold">My Formula</span>
        </div>
      </div>
    </div>
  );
};
