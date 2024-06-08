import { Button } from "antd";
import classNames from "classnames";

interface TradingStrategyProps {
  className?: string;
}

export const TradingStrategy = ({ className }: TradingStrategyProps) => {
  const tradingStrategyClassname = classNames(className);

  return (
    <div className="p-6">
      <div className="text-[#111] font-bold text-lg">Trading Strategy</div>
      <div className="mt-10 grid grid-cols-2 gap-10">
        <div className="text-sm font-semibold leading-5">
          Signal:
          <span className="text-[#1A64F0] text-xs leading-5 font-normal ml-1">
            Over Sold
          </span>
        </div>
        <div className="text-sm font-semibold leading-5 flex justify-end md:justify-start">
          Indicator:
          <span className="text-[#1A64F0] text-xs leading-5 font-normal ml-1">
            RSI-7 ~ <span>27.8</span>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
        <div>
          {/* <div className="text-sm font-semibold leading-5">
            Signal:
            <span className="text-[#1A64F0] text-xs leading-5 font-normal ml-1">
              Over Sold
            </span>
          </div> */}
          <div className="flex flex-col mt-6 gap-4">
            <div className="px-4 py-3 bg-[#E7E7E7] rounded-xl">
              <div className="text-sm font-medium text-[#7D7D7D] leading-5">
                Entry Point
              </div>
              <div className="text-[#333] font-semibold leadin-6 mt-1">
                0.00000079
              </div>
            </div>
            <div className="px-4 py-3 bg-[#E7E7E7] rounded-xl">
              <div className="text-sm font-medium text-[#7D7D7D] leading-5">
                DCA1
              </div>
              <div className="text-[#333] font-semibold leadin-6 mt-1">
                0.00000085
              </div>
            </div>
            <div className="px-4 py-3 bg-[#E7E7E7] rounded-xl">
              <div className="text-sm font-medium text-[#7D7D7D] leading-5">
                DCA2
              </div>
              <div className="text-[#333] font-semibold leadin-6 mt-1">
                0.00000079
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <div className="text-sm font-semibold leading-5">
            Indicator:
            <span className="text-[#1A64F0] text-xs leading-5 font-normal ml-1">
              RSI-7 ~ <span>27.8</span>
            </span>
          </div> */}
          <div className="flex flex-col md:mt-6 gap-4">
            <div className="px-4 py-3 bg-[#E7E7E7] rounded-xl">
              <div className="text-sm font-medium text-[#7D7D7D] leading-5">
                Target Point
              </div>
              <div className="text-[#333] font-semibold leadin-6 mt-1">
                42,000
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <div className="px-4 py-3 bg-[#E7E7E7] rounded-xl ">
                <div className="text-sm font-medium text-[#7D7D7D] leading-5">
                  Risk
                </div>
                <div className="text-[#333] font-semibold leadin-6 mt-1">
                  -500
                </div>
              </div>
              <div className="px-4 py-3 bg-[#E7E7E7] rounded-xl ">
                <div className="text-sm font-medium text-[#7D7D7D] leading-5">
                  Reward
                </div>
                <div className="text-[#333] font-semibold leadin-6 mt-1">
                  +1200
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-[#E7E7E7] rounded-xl">
              <div className="text-sm font-medium text-[#7D7D7D] leading-5">
                Stop Loss
              </div>
              <div className="text-[#333] font-semibold leadin-6 mt-1">
                37,000
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          type="primary"
          size="large"
          className="!px-6 !py-1.5 !h-12 !w-full sm:!w-[300px] !font-bold mt-6 md:mt-10"
        >
          Save
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="mt-6 text-center text-[#7D7D7D] text-xs leading-5 w-full sm:w-[300px]">
          Please keep in mind that these are only suggestions, consider them
          carefully before trading!
        </div>
      </div>
    </div>
  );
};
