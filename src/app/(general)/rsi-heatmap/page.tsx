"use client";
import { RsiFilter } from "@/components/rsi-heatmap/filter";
import { HeatMapChart } from "@/components/rsi-heatmap/heatmap";
import { ManagePortfolio } from "@/components/rsi-heatmap/manage-portfolio";
import { OderInfomation } from "@/components/rsi-heatmap/order-info";
import { TopOverBought } from "@/components/rsi-heatmap/top-over-bought";
import { TopOverSold } from "@/components/rsi-heatmap/top-over-sold";
import { TradeWithCandleStick } from "@/components/rsi-heatmap/trade-with-candle-stick";
import { TradingStrategy } from "@/components/rsi-heatmap/trading-strategy";
import { ArrowsOutSimple } from "@phosphor-icons/react/dist/ssr";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export default function HeatMap() {
  const handle = useFullScreenHandle();

  return (
    <div className="max-w-8xl">
      <RsiFilter />
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 mt-6 ">
        <div className="col-span-3 lg:col-span-1 order-2 lg:order-1 border border-[#E7E7E7] rounded-xl">
          <TopOverSold />
        </div>
        <div className="col-span-3 lg:col-span-2 order-1 lg:order-2 border border-[#E7E7E7] rounded-xl relative">
          <ArrowsOutSimple
            weight="bold"
            width={24}
            height={24}
            className="absolute right-6 top-8 z-50 cursor-pointer"
            onClick={handle.enter}
          />
          <FullScreen handle={handle}>
            <HeatMapChart className="!h-full" />
          </FullScreen>
        </div>
        <div className="col-span-3 lg:col-span-1 order-3 border border-[#E7E7E7] rounded-xl">
          <TopOverBought />
        </div>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 mt-6">
        <div className="col-span-3 lg:col-span-1 border border-[#E7E7E7] rounded-xl">
          <OderInfomation />
        </div>
        <div className="col-span-3 lg:col-span-2 border border-[#E7E7E7] rounded-xl">
          <TradingStrategy />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <div className="flex flex-col justify-between gap-4 h-full">
            <div className="border border-[#E7E7E7] rounded-xl">
              <TradeWithCandleStick />
            </div>
            <div className="grow border border-[#E7E7E7] rounded-xl">
              <ManagePortfolio />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
