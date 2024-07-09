"use client";
import { AiPredictionsContext } from "@/app/contexts/ai-predictions-context";
import classNames from "classnames";
import { useContext } from "react";

interface AiPredictionsChartProps {
  className?: string;
}

export const AiPredictionsChart = ({ className }: AiPredictionsChartProps) => {
  const aiPredictionClassName = classNames(className);
  const aiPredictionsFilter = useContext(AiPredictionsContext);
  return (
    <div className={aiPredictionClassName}>{aiPredictionsFilter.pair}</div>
  );
};
