"use client";
import { AiPredictionsChart } from "@/app/components/ai-pedictions/ai-prediction-chart";
import { AiPredictionsContext } from "@/app/contexts/ai-predictions-context";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { Select } from "antd";
import Image from "next/image";
import { ReactNode, useState } from "react";
import coins from "@/app/data/coins-select.json";

const LableSelectItem = ({
  imgUrl,
  coinName,
}: {
  imgUrl?: string;
  coinName: string;
}) => {
  return (
    <div className="flex gap-1 text-sm font-medium items-center">
      {imgUrl && (
        <Image
          src={imgUrl}
          width={16}
          height={16}
          alt={coinName}
          style={{ height: "16px" }}
        />
      )}
      <div className="truncate">{coinName}</div>
    </div>
  );
};

export default function AIPredictions() {
  const [pair, setPair] = useState("ETHUSDT");
  const [time, setTime] = useState<"DAY" | "WEEK" | "MONTH">("DAY");

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="mx-4">
      <div className="flex items-center justify-end min-[400px]:justify-between">
        <div className="font-bold leading-6 truncate hidden min-[400px]:flex">
          AI Predictions
        </div>
        <div className="flex justify-between gap-2 items-center">
          <Select
            defaultValue="ALL"
            className="w-40"
            onChange={handleChange}
            suffixIcon={
              <CaretDown size={16} weight="fill" className="text-black" />
            }
            options={coins.map((coin: any) => ({
              value: coin.symbol,
              label: (
                <LableSelectItem imgUrl={coin.imgUrl} coinName={coin.name} />
              ),
            }))}
          />
          <Select
            defaultValue="DAY"
            className="w-20"
            // onChange={handleChange}
            suffixIcon={
              <CaretDown size={16} weight="fill" className="text-black" />
            }
            options={[
              { value: "DAY", label: "Day" },
              { value: "WEEK", label: "Week" },
              { value: "MONTH", label: "Month" },
            ]}
          />
        </div>
      </div>
      <AiPredictionsContext.Provider value={{ pair, time }}>
        {/* <AiPredictionsChart /> */}
      </AiPredictionsContext.Provider>
    </div>
  );
}
