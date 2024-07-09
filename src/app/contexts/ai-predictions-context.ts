import { createContext } from "react";

type AiPredictionsFilterType = {
  pair: string;
  time: "DAY" | "WEEK" | "MONTH";
};

export const AiPredictionsContext = createContext({
  pair: "BTCUSDT",
  time: "DAY",
} as AiPredictionsFilterType);
