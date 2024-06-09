"use client";
import { RsiType, TimeType } from "@/type/type";
import { Button } from "antd";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface RsiFilterProps {
  className?: string;
  heatMapType: RsiType;
  setHeatMapType: (type: RsiType) => void;
  time: TimeType;
  setTime: (time: TimeType) => void;
  pair: string;
}

export const RsiFilter = ({
  className,
  heatMapType,
  setHeatMapType,
  time,
  setTime,
  pair,
}: RsiFilterProps) => {
  const filterClassName = classNames(className);
  const getActiveClassName = (type: RsiType) =>
    classNames("snap-center cursor-pointer", {
      "text-[#1A64F0]": type === heatMapType,
    });

  const getActiveTimeClassName = (t: TimeType) =>
    classNames("hover:!text-black !h-12 !px-8 !py-3 !rounded-[10px]", {
      "!text-[#1A64F0] !border-2 !border-[#1A64F0] !shadow-5": t === time,
    });

  return (
    <div className={filterClassName}>
      <div className="flex items-center text-xs text-nowrap overflow-scroll sm:text-sm sm:font-semibold text-[#7D7D7D] gap-x-4 md:gap-x-12 custom-scrollbar">
        <div
          className={getActiveClassName("RSI7")}
          onClick={() => setHeatMapType("RSI7")}
        >
          RSI7 Heatmap
        </div>
        <div
          className={getActiveClassName("RSI14")}
          onClick={() => setHeatMapType("RSI14")}
        >
          RSI14 Heatmap
        </div>
        <div
          className={getActiveClassName("ADX14")}
          onClick={() => setHeatMapType("ADX14")}
        >
          ADX14 Heatmap
        </div>
        <div
          className={getActiveClassName("OTHER")}
          onClick={() => setHeatMapType("OTHER")}
        >
          Other
        </div>
      </div>
      <div className="lg:flex items-center justify-between mt-3">
        <div className="lg:flex lg:gap-x-3">
          <div className="flex gap-x-3 items-center !h-16 overflow-scroll custom-scrollbar">
            <Button className="hover:!text-black !h-12 !px-4 !py-3 !rounded-[10px] !border-2 !border-[#1A64F0] !shadow-5">
              <div className="flex justify-between items-center">
                <div className="w-5 h-5 flex items-center">
                  <Image
                    src="/coin/tether.svg"
                    priority
                    width={20}
                    height={20}
                    alt="user"
                  />
                </div>
                <div className="flex justify-between text-sm font-medium ml-2">
                  <div>Tether</div>
                  <Link href="#" className="ml-1">
                    USD
                  </Link>
                </div>
              </div>
            </Button>
            <Button className="hover:!text-black !h-12 !px-4 !py-3 !rounded-[10px]">
              <div className="flex justify-between items-center">
                <div className="w-5 h-5 flex items-center">
                  <Image
                    src="/coin/binance.svg"
                    priority
                    width={20}
                    height={20}
                    alt="user"
                  />
                </div>
                <div className="flex justify-between text-sm font-medium ml-2">
                  <div>Bitcoin</div>
                  <Link href="#" className="ml-1">
                    BTC
                  </Link>
                </div>
              </div>
            </Button>
            <Button className="hover:!text-black !h-12 !px-4 !py-3 !rounded-[10px]">
              <div className="flex justify-between items-center">
                <div className="w-5 h-5 flex items-center">
                  <Image
                    src="/coin/bitcoin.svg"
                    priority
                    width={20}
                    height={20}
                    alt="user"
                  />
                </div>
                <div className="flex justify-between text-sm font-medium ml-2">
                  <div>Binance USDT</div>
                  <Link href="#" className="ml-1">
                    BUSDT
                  </Link>
                </div>
              </div>
            </Button>
          </div>
          <div className="flex items-center mt-4 lg:mt-0 gap-x-3 overflow-scroll custom-scrollbar">
            <div>
              <Button
                className={getActiveTimeClassName("ONE_DAY")}
                onClick={() => setTime("ONE_DAY")}
              >
                <div className="flex items-center">1D</div>
              </Button>
            </div>
            <div>
              <Button
                className={getActiveTimeClassName("FOUR_HOUR")}
                onClick={() => setTime("FOUR_HOUR")}
              >
                <div className="flex items-center">4H</div>
              </Button>
            </div>
            <div>
              <Button
                className={getActiveTimeClassName("ONE_HOUR")}
                onClick={() => setTime("ONE_HOUR")}
              >
                <div className="flex items-center">1H</div>
              </Button>
            </div>
            <div>
              <Button
                className={getActiveTimeClassName("THIRTY_MINUTES")}
                onClick={() => setTime("THIRTY_MINUTES")}
              >
                <div className="flex items-center">30m</div>
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden xl:flex xl:flex-col items-center px-32">
          <div className="text-sm font-medium leading-5 text-[#7D7D7D]">
            Tradding Pair:
          </div>
          <div className="text-xl font-semibold leading-8 mt-2">
            {pair?.replace(/(.*)(USDT)$/, "$1/$2")}
          </div>
        </div>
      </div>
    </div>
  );
};
