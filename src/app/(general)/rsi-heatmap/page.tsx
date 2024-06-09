"use client";
import { useEffect, useState } from "react";
import { RsiFilter } from "@/components/rsi-heatmap/filter";
import { HeatMapChart } from "@/components/rsi-heatmap/heatmap";
import { ManagePortfolio } from "@/components/rsi-heatmap/manage-portfolio";
import { OderInfomation } from "@/components/rsi-heatmap/order-info";
import {
  TopOverBought,
  TopOverBoughtDataItem,
} from "@/components/rsi-heatmap/top-over-bought";
import {
  TopOverSold,
  TopOverSoldDataItem,
} from "@/components/rsi-heatmap/top-over-sold";
import { TradeWithCandleStick } from "@/components/rsi-heatmap/trade-with-candle-stick";
import { TradingStrategy } from "@/components/rsi-heatmap/trading-strategy";
import { ArrowsOutSimple } from "@phosphor-icons/react/dist/ssr";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { RsiType, TimeType } from "@/type/type";
import api from "@/axios";

export default function HeatMap() {
  const handle = useFullScreenHandle();
  const [heatMapType, setHeatMapType] = useState<RsiType>("RSI7");
  const [time, setTime] = useState<TimeType>("ONE_DAY");
  const [topOverSoldData, setTopOverSoldData] = useState([]);
  const [topOverBoughtData, setTopOverBoughtData] = useState([]);
  const [recordActiveIndex, setRecordActiveIndex] = useState(0);
  const [recordActive, setRecordActive] = useState<
    TopOverSoldDataItem | TopOverBoughtDataItem
  >({} as TopOverSoldDataItem | TopOverBoughtDataItem);
  const [signal, setSignal] = useState<"sold" | "bought">("sold");

  const fetchData = async (heatMapType: RsiType, time: TimeType) => {
    try {
      const { data: topOverSold } = await api.get("/heatmap/top-over-sold", {
        params: { heatMapType, timeType: time },
      });
      const { data: topOverBought } = await api.get(
        "/heatmap/top-over-bought",
        {
          params: { heatMapType, timeType: time },
        }
      );

      setTopOverSoldData(topOverSold);
      setTopOverBoughtData(topOverBought);
      setRecordActive({
        key: 0,
        name: topOverSold[0]?.symbol,
        rsi: topOverSold[0]?.rsi,
        close: topOverSold[0]?.close,
        high: topOverSold[0]?.high,
        low: topOverSold[0]?.low,
        discoveredOn: topOverSold[0]?.dateCreated,
      });
      setSignal("sold");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(heatMapType, time);
  }, [heatMapType, time]);

  return (
    <div className="max-w-8xl">
      <RsiFilter
        heatMapType={heatMapType}
        setHeatMapType={setHeatMapType}
        time={time}
        setTime={setTime}
        pair={recordActive.name}
      />
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 mt-6">
        <div className="col-span-3 lg:col-span-1 order-2 lg:order-1 border border-[#E7E7E7] rounded-xl">
          <TopOverSold
            data={topOverSoldData}
            signal={signal}
            setRecordActive={setRecordActive}
            recordActiveIndex={recordActiveIndex}
            setRecordActiveIndex={setRecordActiveIndex}
            setSignal={setSignal}
          />
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
          <TopOverBought
            data={topOverBoughtData}
            signal={signal}
            setRecordActive={setRecordActive}
            recordActiveIndex={recordActiveIndex}
            setRecordActiveIndex={setRecordActiveIndex}
            setSignal={setSignal}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 mt-6">
        <div className="col-span-3 lg:col-span-1 border border-[#E7E7E7] rounded-xl">
          <OderInfomation />
        </div>
        <div className="col-span-3 lg:col-span-2 border border-[#E7E7E7] rounded-xl">
          <TradingStrategy
            record={recordActive}
            signal={signal}
            heatMapType={heatMapType}
          />
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
