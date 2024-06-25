"use client";

import { Table } from "antd";
import classNames from "classnames";
import "@/app/css/rsi-heatmap/top-over-sold.css";
import { useEffect, useState } from "react";
const { Column } = Table;

export type TopOverBoughtData = {
  symbol: string;
  rsi: number;
  close: number;
  high: number;
  low: number;
  dateCreated: string;
};

export type TopOverBoughtDataItem = {
  key: number;
  name: string;
  rsi: number;
  close: number;
  high: number;
  low: number;
  discoveredOn: string;
};
type TopOverBoughtProps = {
  className?: string;
  recordActiveIndex?: number;
  setRecordActive?: (record: TopOverBoughtDataItem) => void;
  setRecordActiveIndex?: (index: number) => void;
  signal?: "sold" | "bought";
  setSignal?: (signal: "sold" | "bought") => void;
  data: TopOverBoughtData[];
};

export const TopOverBought = ({
  className,
  data,
  recordActiveIndex,
  setRecordActiveIndex,
  signal,
  setSignal,
  setRecordActive,
}: TopOverBoughtProps) => {
  const [loading, setLoading] = useState(false);
  const [topOverBoughtData, setTopOverBoughtData] = useState<
    TopOverBoughtDataItem[]
  >([]);

  useEffect(() => {
    setLoading(true);
    const newData = data?.map((item, index) => {
      return {
        key: index,
        name: item.symbol,
        rsi: item.rsi,
        close: item.close,
        high: item.high,
        low: item.low,
        discoveredOn: item.dateCreated,
      };
    });
    setTopOverBoughtData(newData);
    setLoading(false);
  }, [data]);

  const topOverSoldClassName = classNames("h-[604px]", className);

  const onRowClick = (record: TopOverBoughtDataItem) => {
    if (record) {
      setSignal && setSignal("bought");
      setRecordActiveIndex && setRecordActiveIndex(record.key);
      setRecordActive && setRecordActive(record);
    }
  };

  const rowClassName = (record: TopOverBoughtDataItem) => {
    const selectedRowKey = recordActiveIndex ?? "";
    return record.key === selectedRowKey && signal === "bought"
      ? "row-active"
      : "";
  };

  return (
    <div className={topOverSoldClassName}>
      <div className="px-6 pt-6">
        <div className="text-[#CC0001] text-lg leading-7 font-bold text-center">
          Top Over Bought
        </div>
        <Table
          dataSource={topOverBoughtData}
          size="middle"
          pagination={false}
          scroll={{ y: 460 }}
          loading={loading}
          className="mt-4 header-color ant-table-custom"
          onRow={(record) => ({
            onClick: () => onRowClick(record),
          })}
          rowClassName={rowClassName}
        >
          <Column
            title="Name"
            dataIndex="name"
            key="name"
            align="left"
            render={(name: string) => (
              <>
                <div key={name} className="leading-5 text-sm text-[#CC0001]">
                  {name}
                </div>
              </>
            )}
          />
          <Column
            title="Discovered on"
            dataIndex="discoveredOn"
            key="discoveredOn"
            align="right"
          />
        </Table>
      </div>
    </div>
  );
};
