"use client";

import { Table } from "antd";
import classNames from "classnames";
import "../../app/css/rsi-heatmap/top-over-sold.css";
const { Column } = Table;

interface TopOverBoughtProps {
  className?: string;
}
export const TopOverBought = ({ className }: TopOverBoughtProps) => {
  interface DataType {
    key: React.Key;
    name: string;
    discoveredOn: string;
  }

  const data: DataType[] = [
    {
      key: "1",
      name: "AMBBTC...",
      discoveredOn: "00:00 - 24/11",
    },
    {
      key: "2",
      name: "AMBBTC...",
      discoveredOn: "00:00 - 24/11",
    },
    {
      key: "3",
      name: "AMBBTC...",
      discoveredOn: "00:00 - 24/11",
    },
    {
      key: "4",
      name: "AMBBTC...",
      discoveredOn: "00:00 - 24/11",
    },
    {
      key: "5",
      name: "AMBBTC...",
      discoveredOn: "00:00 - 24/11",
    },
    {
      key: "6",
      name: "AMBBTC...",
      discoveredOn: "00:00 - 24/11",
    },
    {
      key: "7",
      name: "AMBBTC...",
      discoveredOn: "00:00 - 24/11",
    },
    {
      key: "8",
      name: "AMBBTC...",
      discoveredOn: "00:00 - 24/11",
    },
    {
      key: "9",
      name: "AMBBTC...",
      discoveredOn: "00:00 - 24/11",
    },
    {
      key: "10",
      name: "AMBBTC...",
      discoveredOn: "00:00 - 24/11",
    },
    {
      key: "11",
      name: "AMBBTC...",
      discoveredOn: "00:00 - 24/11",
    },
    {
      key: "12",
      name: "AMBBTC...",
      discoveredOn: "00:00 - 24/11",
    },
  ];

  const topOverSoldClassName = classNames("h-[604px]", className);

  return (
    <div className={topOverSoldClassName}>
      <div className="px-6 pt-6">
        <div className="text-[#CC0001] text-lg leading-7 font-bold text-center">
          Top Over Bought
        </div>
        <Table
          dataSource={data}
          size="middle"
          pagination={false}
          scroll={{ y: 460 }}
          className="mt-4 header-color ant-table-custom"
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
