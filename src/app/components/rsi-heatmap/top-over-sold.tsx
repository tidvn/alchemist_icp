"use client";

import { Table } from "antd";
import classNames from "classnames";
import "@/app/css/rsi-heatmap/top-over-bought.css";
import { useCallback, useContext, useEffect, useState } from "react";
import api from "@/app/axios";
import { RsiType, TimeType } from "@/app/type/type";
import { SingleIndicatorContext } from "@/app/contexts/single-indicator";
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
};

export const TopOverSold = ({ className }: TopOverSoldProps) => {
  const [loading, setLoading] = useState(false);
  const [topOverSoldData, setTopOverSoldData] = useState<TopOverSoldDataItem[]>(
    []
  );
  const singleIndicatorFilter = useContext(SingleIndicatorContext);

  const fetchData = useCallback(
    async (heatMapType: RsiType, time: TimeType) => {
      try {
        setLoading(true);
        const { data: topOverSold } = await api.get("/heatmap/top-over-sold", {
          params: { heatMapType, timeType: time },
        });
        setTopOverSoldData(topOverSold);

        singleIndicatorFilter.setRecordActive({
          key: 0,
          name: topOverSold[0]?.symbol,
          rsi: topOverSold[0]?.rsi,
          close: topOverSold[0]?.close,
          high: topOverSold[0]?.high,
          low: topOverSold[0]?.low,
          discoveredOn: topOverSold[0]?.dateCreated,
        });
        singleIndicatorFilter.setSignal("sold");
        singleIndicatorFilter.setRecordActiveIndex(0);
        const newData = topOverSold?.map((item: any, index: number) => {
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
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    },
    [
      singleIndicatorFilter.setRecordActive,
      singleIndicatorFilter.setSignal,
      singleIndicatorFilter.setRecordActiveIndex,
    ]
  );

  useEffect(() => {
    fetchData(singleIndicatorFilter.type, singleIndicatorFilter.time);
  }, [fetchData, singleIndicatorFilter.type, singleIndicatorFilter.time]);

  const onRowClick = (record: TopOverSoldDataItem) => {
    if (record) {
      singleIndicatorFilter.setSignal("sold");
      singleIndicatorFilter.setRecordActiveIndex(record.key);
      singleIndicatorFilter.setRecordActive(record);
    }
  };

  const rowClassName = (record: TopOverSoldDataItem) => {
    const selectedRowKey = singleIndicatorFilter.recordActiveIndex ?? "";
    return record.key === selectedRowKey &&
      singleIndicatorFilter.signal === "sold"
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
            className="truncate"
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
            className="truncate"
          />
        </Table>
      </div>
    </div>
  );
};
