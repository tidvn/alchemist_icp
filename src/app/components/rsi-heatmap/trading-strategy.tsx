"use client";
import { Button } from "antd";
import classNames from "classnames";
import { TopOverSoldDataItem } from "./top-over-sold";
import { TopOverBoughtDataItem } from "./top-over-bought";
import { useContext, useMemo } from "react";
import { RsiType } from "@/app/type/type";
import { SingleIndicatorContext } from "@/app/contexts/single-indicator";

interface TradingStrategyProps {
  className?: string;
}

export const TradingStrategy = ({ className }: TradingStrategyProps) => {
  const tradingStrategyClassname = classNames(className);
  const singleIndicatorFilter = useContext(SingleIndicatorContext);

  const entryPoint = useMemo(() => {
    if (singleIndicatorFilter.recordActive?.close) {
      return singleIndicatorFilter.recordActive.close;
    }
    return 0;
  }, [singleIndicatorFilter.recordActive?.close]);

  const dca1 = useMemo(() => {
    if (
      singleIndicatorFilter.recordActive?.close &&
      singleIndicatorFilter.recordActive?.low &&
      singleIndicatorFilter.recordActive?.high &&
      singleIndicatorFilter.signal
    ) {
      return (
        (singleIndicatorFilter.recordActive.close +
          (singleIndicatorFilter.signal === "sold"
            ? singleIndicatorFilter.recordActive.low
            : singleIndicatorFilter.recordActive.high)) /
        2
      );
    }
    return 0;
  }, [
    singleIndicatorFilter.recordActive?.close,
    singleIndicatorFilter.recordActive?.low,
    singleIndicatorFilter.recordActive?.high,
    singleIndicatorFilter.signal,
  ]);

  const dca2 = useMemo(() => {
    if (
      singleIndicatorFilter.recordActive?.low &&
      singleIndicatorFilter.recordActive?.high &&
      singleIndicatorFilter.signal
    ) {
      return singleIndicatorFilter.signal === "sold"
        ? singleIndicatorFilter.recordActive.low
        : singleIndicatorFilter.recordActive.high;
    }
    return 0;
  }, [
    singleIndicatorFilter.recordActive?.low,
    singleIndicatorFilter.recordActive?.high,
    singleIndicatorFilter.signal,
  ]);

  const targetPoint = useMemo(() => {
    return entryPoint * 1.05;
  }, [entryPoint]);

  const stopLoss = useMemo(() => {
    if (
      singleIndicatorFilter.recordActive?.low &&
      singleIndicatorFilter.recordActive?.high &&
      singleIndicatorFilter.signal
    ) {
      return singleIndicatorFilter.signal === "sold"
        ? singleIndicatorFilter.recordActive.low * 1.05
        : singleIndicatorFilter.recordActive.high * 1.05;
    }
    return 0;
  }, [
    singleIndicatorFilter.recordActive?.low,
    singleIndicatorFilter.recordActive?.high,
    singleIndicatorFilter.signal,
  ]);

  const reword = useMemo(() => {
    if (singleIndicatorFilter.recordActive?.close) {
      return (singleIndicatorFilter.recordActive.close * 0.05).toFixed(6);
    }
    return 0;
  }, [singleIndicatorFilter.recordActive?.close]);

  const risk = useMemo(() => {
    if (
      singleIndicatorFilter.recordActive?.close &&
      singleIndicatorFilter.recordActive?.low &&
      singleIndicatorFilter.recordActive?.high &&
      singleIndicatorFilter.signal
    ) {
      if (singleIndicatorFilter.signal === "sold") {
        return (
          singleIndicatorFilter.recordActive.low * 0.95 -
          singleIndicatorFilter.recordActive.close
        ).toFixed(6);
      } else {
        return (
          singleIndicatorFilter.recordActive.close -
          singleIndicatorFilter.recordActive.high * 1.05
        ).toFixed(6);
      }
    }
    return 0;
  }, [
    singleIndicatorFilter.recordActive?.close,
    singleIndicatorFilter.recordActive?.low,
    singleIndicatorFilter.recordActive?.high,
    singleIndicatorFilter.signal,
  ]);

  const signalClassName = classNames("text-xs leading-5 font-normal ml-1", {
    "text-[#1A64F0]": singleIndicatorFilter.signal === "sold",
    "text-[#CC0001]": singleIndicatorFilter.signal === "bought",
  });

  return (
    <div className="p-6">
      <div className="text-[#111] font-bold text-lg">Trading Strategy</div>
      <div className="mt-10 grid grid-cols-2 gap-10">
        <div className="text-sm font-semibold leading-5">
          Signal:
          <span className={signalClassName}>
            {singleIndicatorFilter.signal === "bought"
              ? "Over Bought"
              : "Over Sold"}
          </span>
        </div>
        <div className="text-sm font-semibold leading-5 flex justify-end md:justify-start">
          Indicator:
          <span className="text-[#1A64F0] text-xs leading-5 font-normal ml-1">
            {singleIndicatorFilter.type} ~{" "}
            <span>{singleIndicatorFilter.recordActive?.rsi}</span>
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
                {entryPoint}
              </div>
            </div>
            <div className="px-4 py-3 bg-[#E7E7E7] rounded-xl">
              <div className="text-sm font-medium text-[#7D7D7D] leading-5">
                DCA1
              </div>
              <div className="text-[#333] font-semibold leadin-6 mt-1">
                {dca1}
              </div>
            </div>
            <div className="px-4 py-3 bg-[#E7E7E7] rounded-xl">
              <div className="text-sm font-medium text-[#7D7D7D] leading-5">
                DCA2
              </div>
              <div className="text-[#333] font-semibold leadin-6 mt-1">
                {dca2}
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
                {targetPoint}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <div className="px-4 py-3 bg-[#E7E7E7] rounded-xl ">
                <div className="text-sm font-medium text-[#7D7D7D] leading-5">
                  Risk
                </div>
                <div className="text-[#333] font-semibold leadin-6 mt-1">
                  {risk}
                </div>
              </div>
              <div className="px-4 py-3 bg-[#E7E7E7] rounded-xl ">
                <div className="text-sm font-medium text-[#7D7D7D] leading-5">
                  Reward
                </div>
                <div className="text-[#333] font-semibold leadin-6 mt-1">
                  {reword}
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-[#E7E7E7] rounded-xl">
              <div className="text-sm font-medium text-[#7D7D7D] leading-5">
                Stop Loss
              </div>
              <div className="text-[#333] font-semibold leadin-6 mt-1">
                {stopLoss}
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
