import { createContext } from "react";
import { RsiType, TimeType } from "../type/type";
import { TopOverSoldDataItem } from "../components/rsi-heatmap/top-over-sold";
import { TopOverBoughtDataItem } from "../components/rsi-heatmap/top-over-bought";

type singleIndicatorFilterType = {
  type: RsiType;
  time: TimeType;
  recordActive: TopOverSoldDataItem | TopOverBoughtDataItem;
  recordActiveIndex: number;
  signal: "sold" | "bought";
  setRecordActive: (record: TopOverSoldDataItem) => void;
  setSignal: (signal: "sold" | "bought") => void;
  setRecordActiveIndex: (index: number) => void;
};

export const SingleIndicatorContext = createContext({
  type: "RSI7",
  time: "ONE_DAY",
  recordActive: {},
  setRecordActive: (record: TopOverSoldDataItem) => {},
  setSignal: (signal: "bought" | "sold") => {},
} as singleIndicatorFilterType);
