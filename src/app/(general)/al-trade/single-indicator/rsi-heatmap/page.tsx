"use client";
import { HeatMapChart } from "@/app/components/rsi-heatmap/heatmap";
import { ManagePortfolio } from "@/app/components/rsi-heatmap/manage-portfolio";
import { OderInfomation } from "@/app/components/rsi-heatmap/order-info";
import { TopOverBought } from "@/app/components/rsi-heatmap/top-over-bought";
import { TopOverSold } from "@/app/components/rsi-heatmap/top-over-sold";
import { TradeWithCandleStick } from "@/app/components/rsi-heatmap/trade-with-candle-stick";
import { TradingStrategy } from "@/app/components/rsi-heatmap/trading-strategy";
import { SingleIndicatorContext } from "@/app/contexts/single-indicator";
import { RsiType } from "@/app/type/type";
import { ArrowsOutSimple } from "@phosphor-icons/react/dist/ssr";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useRouter } from "next/navigation";

export default function HeatMap({}) {
  const handle = useFullScreenHandle();
  const singleIndicatorFilter = useContext(SingleIndicatorContext);
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  useEffect(() => {
    if (type !== singleIndicatorFilter.type) {
      singleIndicatorFilter.setType(type as RsiType);
    }
  }, [singleIndicatorFilter.type, type]);
  return (
    <div className="max-w-8xl">
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 mt-6">
        <div className="col-span-3 lg:col-span-1 order-2 lg:order-1 border border-[#E7E7E7] rounded-xl">
          {singleIndicatorFilter.type === "FIBONACCI" ? (
            <div></div>
          ) : (
            <TopOverSold />
          )}
        </div>
        <div className="col-span-3 lg:col-span-2 order-1 lg:order-2 border border-[#E7E7E7] rounded-xl relative">
          <ArrowsOutSimple
            weight="bold"
            width={24}
            height={24}
            className="absolute right-6 top-8 z-20 cursor-pointer"
            onClick={handle.enter}
          />
          <FullScreen
            handle={handle}
            className="flex items-center justify-around h-full"
          >
            <HeatMapChart />
          </FullScreen>
        </div>
        <div className="col-span-3 lg:col-span-1 order-3 border border-[#E7E7E7] rounded-xl">
          <TopOverBought />
        </div>
      </div>
      {singleIndicatorFilter.type !== "FIBONACCI" && (
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
      )}
    </div>
  );
}
