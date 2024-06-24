"use client";

import { Table } from "antd";
import classNames from "classnames";
import "@/app/css/rsi-heatmap/top-over-bought.css";
import { useEffect, useState } from "react";
const { Column } = Table;

export type TopOverSoldData = {
  symbol: string;
  rsi: number;
  close: number;
  high: number;
  low: number;
  dateCreated: string;
};

export type TopOverSoldDataItem = {
  key: number;
  name: string;
  rsi: number;
  close: number;
  high: number;
  low: number;
  discoveredOn: string;
};

type TopOverSoldProps = {
  className?: string;
  recordActiveIndex?: number;
  setRecordActive?: (record: TopOverSoldDataItem) => void;
  setRecordActiveIndex?: (index: number) => void;
  signal?: "sold" | "bought";
  setSignal?: (signal: "sold" | "bought") => void;
  data: TopOverSoldData[];
};

export const TopOverSold = ({
  className,
  data,
  recordActiveIndex,
  setRecordActiveIndex,
  signal,
  setSignal,
  setRecordActive,
}: TopOverSoldProps) => {
  const [loading, setLoading] = useState(false);
  const [topOverSoldData, setTopOverSoldData] = useState<TopOverSoldDataItem[]>(
    []
  );
  const [selectedRowKey, setSelectedRowKey] = useState(0);

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
    setTopOverSoldData(newData);
    setLoading(false);
  }, [data]);

  const onRowClick = (record: TopOverSoldDataItem) => {
    if (record) {
      setSignal && setSignal("sold");
      setRecordActiveIndex && setRecordActiveIndex(record.key);
      setRecordActive && setRecordActive(record);
    }
  };

  const rowClassName = (record: TopOverSoldDataItem) => {
    const selectedRowKey = recordActiveIndex ?? "";
    return record.key === selectedRowKey && signal === "sold"
      ? "row-active"
      : "";
  };

  const topOverSoldClassName = classNames("h-[604px]", className);

  return (
    <div className={topOverSoldClassName}>
      <div className="px-6 pt-6">
        <div className="text-[#00BD46] text-lg leading-7 font-bold text-center">
          Top Over Sold
        </div>
        <Table
          dataSource={topOverSoldData}
          size="middle"
          pagination={false}
          scroll={{ y: 460 }}
          className="mt-4 header-color ant-table-custom"
          loading={loading}
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
                <div key={name} className="leading-5 text-sm text-[#00BD46]">
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
