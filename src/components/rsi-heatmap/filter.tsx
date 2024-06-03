"use client";
import { Button } from "antd";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface RsiFilterProps {
  className?: string;
}

type RSIType = "rsi7" | "rsi14" | "adx14" | "other";

export const RsiFilter = ({ className }: RsiFilterProps) => {
  const [heatMapType, setHeatMapType] = useState("rsi7" as RSIType);

  const filterClassName = classNames(className);
  const getActiveClassName = (type: RSIType) =>
    classNames("snap-center cursor-pointer", {
      "text-[#1A64F0]": type === heatMapType,
    });

  return (
    <div className={filterClassName}>
      <div className="flex items-center text-xs text-nowrap overflow-scroll sm:text-sm sm:font-semibold text-[#7D7D7D] gap-x-4 md:gap-x-12 custom-scrollbar">
        <div
          className={getActiveClassName("rsi7")}
          onClick={() => setHeatMapType("rsi7")}
        >
          RSI7 Heatmap
        </div>
        <div
          className={getActiveClassName("rsi14")}
          onClick={() => setHeatMapType("rsi14")}
        >
          RSI14 Heatmap
        </div>
        <div
          className={getActiveClassName("adx14")}
          onClick={() => setHeatMapType("adx14")}
        >
          ADX14 Heatmap
        </div>
        <div
          className={getActiveClassName("other")}
          onClick={() => setHeatMapType("other")}
        >
          Other
        </div>
      </div>
      <div className="lg:flex items-center justify-between mt-3">
        <div className="lg:flex lg:gap-x-3">
          <div className="flex gap-x-3 items-center !h-16 overflow-scroll custom-scrollbar">
            <Button className="hover:!text-black !h-11 !px-4 !py-3 !rounded-[10px]">
              <div className="flex justify-between items-center">
                <div className="w-5 h-5">
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
            <Button className="hover:!text-black !h-11 !px-4 !py-3 !rounded-[10px]">
              <div className="flex justify-between items-center">
                <div className="w-5 h-5">
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
            <Button className="hover:!text-black !h-11 !px-4 !py-3 !rounded-[10px]">
              <div className="flex justify-between items-center">
                <div className="w-5 h-5">
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
              <Button className="hover:!text-black !h-11 !px-8 !py-3 !rounded-[10px]">
                1D
              </Button>
            </div>
            <div>
              <Button className="hover:!text-black !h-11 !px-8 !py-3 !rounded-[10px]">
                4H
              </Button>
            </div>
            <div>
              <Button className="hover:!text-black !h-11 !px-8 !py-3 !rounded-[10px]">
                1H
              </Button>
            </div>
            <div>
              <Button className="hover:!text-black !h-11 !px-8 !py-3 !rounded-[10px]">
                30m
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden xl:flex xl:flex-col items-center px-32">
          <div className="text-sm font-medium leading-5 text-[#7D7D7D]">
            Tradding Pair:
          </div>
          <div className="text-xl font-semibold leading-8 mt-2">BTC/USDT</div>
        </div>
      </div>
    </div>
  );
};
