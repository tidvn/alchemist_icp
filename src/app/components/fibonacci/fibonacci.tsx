import { useState, useEffect, useContext, useCallback, useMemo } from "react";
import ReactECharts from "echarts-for-react";
import { Spin, Table } from "antd";
import Column from "antd/es/table/Column";
import { SingleIndicatorContext } from "@/app/contexts/single-indicator";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { ArrowsOutSimple } from "@phosphor-icons/react/dist/ssr";
import dayjs from "dayjs";
import api from "@/app/axios";
import "@/app/css/rsi-heatmap/top-over-bought.css";
import { TimeType } from "@/app/type/type";

export type OriginalPair = {
  key: number;
  symbol: string;
  discoveredOn: string;
};

export const Fibonacci = () => {
  const [originalPairListLoading, setOriginalPairListLoading] = useState(false);
  const [similarPairListLoading, setSimilarPairListLoading] = useState(false);
  const [fibonacciChartLoading, setFibonacciChartLoading] = useState(false);
  const [originalPairList, setOriginalPairList] = useState([]);
  const [similarPairList, setSimilarPairList] = useState<any>([]);
  const [originalPairSelected, setOriginalPairSelected] = useState(
    {} as OriginalPair
  );
  const [selectedSimilarPairKeys, setSelectedSimilarPairKeys] = useState<
    number[]
  >([]);
  const handle = useFullScreenHandle();
  const singleIndicatorFilter = useContext(SingleIndicatorContext);

  const similarPairsSelection = {
    selectedRowKeys: selectedSimilarPairKeys,
    hideSelectAll: true,
    onChange: (selectedRowKeys: any) => {
      if (selectedRowKeys.length <= 5) {
        setSelectedSimilarPairKeys(selectedRowKeys);
      }
    },
  };

  const fetchOriginalPairList = useCallback(async (time: TimeType) => {
    try {
      setOriginalPairListLoading(true);
      const { data } = await api.get("/fibonacci/original-pair-list", {
        params: { timeType: time },
      });
      if (data.length > 0) {
        const newData = data.map((item: OriginalPair, index: number) => ({
          key: index,
          symbol: item.symbol,
          discoveredOn: item.discoveredOn,
        }));
        setOriginalPairList(newData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setOriginalPairListLoading(false);
    }
  }, []);

  // const fetchSimilarPairList = useCallback(
  //   async (originalPair: string, time: TimeType) => {
  //     try {
  //       setSimilarPairListLoading(true);
  //       const { data } = await api.get("/fibonacci/fibonacci-info", {
  //         params: { originalPair, timeType: time },
  //       });
  //       if (data.length > 0) {
  //         const newData = data.map((item: any, index: number) => ({
  //           key: index,
  //           ...item,
  //         }));
  //         setSimilarPairList(newData);
  //         const firstFiveKeys = newData
  //           .slice(0, 5)
  //           .map((item: any) => item.key);
  //         setSelectedSimilarPairKeys(firstFiveKeys);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       setSimilarPairListLoading(false);
  //     }
  //   },
  //   []
  // );

  const fetchSimilarPairList = useCallback(
    async (originalPair: string, time: TimeType) => {
      try {
        setSimilarPairListLoading(true);
        const { data } = await api.get("/fibonacci/fibonacci-info", {
          params: { originalPair, timeType: time },
        });

        if (data.similarSymbols.length > 0) {
          const newData = data.similarSymbols.map(
            (symbol: any, index: number) => ({
              key: index,
              originalSymbol: data.originalSymbol,
              originalStartDate: data.originalStartDate,
              originalEndDate: data.originalEndDate,
              originalPrices: data.originalPrices,
              originalFibonacci: data.originalFibonacci,
              similarSymbol: symbol,
              similarStartDate: data.similarStartDates[index],
              similarEndDate: data.similarEndDates[index],
              similarPrices: data.similarPrices[index],
              similarFibonacci: data.similarFibonacci[index],
            })
          );

          setSimilarPairList(newData);
          const firstFiveKeys = newData
            .slice(0, 5)
            .map((item: any) => item.key);
          setSelectedSimilarPairKeys(firstFiveKeys);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setSimilarPairListLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchOriginalPairList(singleIndicatorFilter.time);
  }, [fetchOriginalPairList, singleIndicatorFilter.time]);

  useEffect(() => {
    if (originalPairList.length > 0) {
      setOriginalPairSelected(originalPairList[0]);
    }
  }, [originalPairList]);

  useEffect(() => {
    if (originalPairSelected.symbol) {
      fetchSimilarPairList(
        originalPairSelected.symbol,
        singleIndicatorFilter.time
      );
    }
  }, [
    fetchSimilarPairList,
    originalPairSelected.symbol,
    singleIndicatorFilter.time,
  ]);

  useEffect(() => {
    if (similarPairList.length > 0) {
      const originalSeries = {
        name: originalPairSelected.symbol,
        data: similarPairList[0].originalPrices.map(
          (price: number, i: number) => {
            let timeFormat;
            switch (singleIndicatorFilter.time) {
              case "ONE_HOUR":
                timeFormat = "YYYY-MM-DD HH:00:00";
                break;
              case "FOUR_HOUR":
                timeFormat = "YYYY-MM-DD HH:00:00";
                break;
              case "ONE_DAY":
                timeFormat = "YYYY-MM-DD 00:00:00";
                break;
              default:
                timeFormat = "YYYY-MM-DD HH:mm:ss";
                break;
            }
            const timeToAdd =
              singleIndicatorFilter.time === "ONE_HOUR"
                ? i
                : singleIndicatorFilter.time === "FOUR_HOUR"
                ? i * 4
                : i;
            const timeUnit =
              singleIndicatorFilter.time === "ONE_HOUR" ||
              singleIndicatorFilter.time === "FOUR_HOUR"
                ? "hour"
                : "day";
            return [
              dayjs(similarPairList[0].originalStartDate)
                .add(timeToAdd, timeUnit)
                .format(timeFormat),
              similarPairList[0].originalFibonacci[i],
              price,
            ];
          }
        ),
        type: "line",
        symbol: "none",
      };

      const updatedSeriesData = [
        originalSeries,
        ...similarPairList
          .filter((item: any) => selectedSimilarPairKeys.includes(item.key))
          .map((item: any) => ({
            name: item.similarSymbol,
            data: item.similarPrices.map((price: number, i: number) => {
              let timeFormat;
              switch (singleIndicatorFilter.time) {
                case "ONE_HOUR":
                  timeFormat = "YYYY-MM-DD HH:00:00";
                  break;
                case "FOUR_HOUR":
                  timeFormat = "YYYY-MM-DD HH:00:00"; // Adjust if needed
                  break;
                case "ONE_DAY":
                  timeFormat = "YYYY-MM-DD 00:00:00";
                  break;
                default:
                  timeFormat = "YYYY-MM-DD HH:mm:ss"; // Default
                  break;
              }
              const timeToAdd =
                singleIndicatorFilter.time === "ONE_HOUR"
                  ? i
                  : singleIndicatorFilter.time === "FOUR_HOUR"
                  ? i * 4
                  : i;
              const timeUnit =
                singleIndicatorFilter.time === "ONE_HOUR" ||
                singleIndicatorFilter.time === "FOUR_HOUR"
                  ? "hour"
                  : "day";
              return [
                dayjs(item.similarStartDate)
                  .add(timeToAdd, timeUnit)
                  .format(timeFormat),
                item.similarFibonacci[i],
                price,
              ];
            }),
            lineStyle: {
              type: "dashed", // Đặt kiểu nét đứt cho các series
            },
            type: "line",
            symbol: "none",
          })),
      ];

      setSeriesData(updatedSeriesData);
    }
  }, [
    originalPairSelected,
    similarPairList,
    selectedSimilarPairKeys,
    singleIndicatorFilter.time,
  ]);

  const [seriesData, setSeriesData] = useState<any[]>([]);

  const fibonacciChartOptions = useMemo(() => {
    return {
      dataZoom: [
        {
          type: "inside", // Hoặc 'slider' nếu bạn muốn thanh trượt dataZoom
          xAxisIndex: [0], // Chỉ định trục xAxis áp dụng dataZoom
          start: 0, // Phần trăm bắt đầu hiển thị (0 = 0%)
          end: 100, // Phần trăm kết thúc hiển thị (100 = 100%)
          // zoomLock: true,
          realtime: false,
        },
      ],
      grid: {
        z: 10,
        left: 10,
        right: 10,
        top: 20,
        bottom: 50,
      },
      xAxis: {
        type: "time",
        splitLine: {
          show: true,
        },
      },
      yAxis: {
        type: "value",
        show: false,
        min: 0,
        max: 1,
      },
      legend: {
        type: "scroll",
        data: seriesData.map((item) => item.name), // Tự động lấy tên của các series để hiển thị trong legend
        top: "bottom", // Có thể điều chỉnh vị trí của legend
        left: "center",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
        },
        formatter: function (params: any) {
          let result = `<strong>${params[0].axisValueLabel}</strong><br/>`;
          params.forEach((item: any) => {
            result += `${item.marker} <strong>${item.seriesName}</strong><br/>`;
            result += `Fibonacci: ${item.data[1]}<br/>`;
            result += `Price: ${item.data[2]}<br/>`;
          });
          return result;
        },
      },
      series: seriesData.map((item) => ({
        ...item,
        markArea: {
          silent: true,
          label: {
            show: true,
            fontSize: 14,
            color: "#000",
            position: "insideBottomLeft",
            offset: [0, 12],
          },
          emphasis: {
            disabled: true,
          },
          data: [
            [
              {
                name: "0.00",
                yAxis: 0,
                itemStyle: {
                  color: "rgb(231,231,231)",
                  borderWidth: 2,
                  borderType: "dashed",
                  borderColor: "rgba(199, 199, 199, 0.7)",
                },
              },
              {
                yAxis: 0.236,
              },
            ],
            [
              {
                name: "0.236",
                yAxis: 0.236,
                itemStyle: {
                  color: "rgb(213,234,246)",
                  borderWidth: 2,
                  borderType: "dashed",
                  borderColor: "rgba(185, 227, 251, 1)",
                },
              },
              {
                yAxis: 0.382,
              },
            ],
            [
              {
                name: "0.382",
                yAxis: 0.382,
                itemStyle: {
                  color: "rgb(213,245,234)",
                  borderWidth: 2,
                  borderType: "dashed",
                  borderColor: "rgba(195, 253, 233, 1)",
                },
              },
              {
                yAxis: 0.5,
              },
            ],
            [
              {
                name: "0.5",
                yAxis: 0.5,
                itemStyle: {
                  color: "rgba(213,245,212, 0.7)",
                  borderWidth: 2,
                  borderType: "dashed",
                  borderColor: "rgba(199, 244, 197, 1)",
                },
              },
              {
                yAxis: 0.618,
              },
            ],

            [
              {
                name: "0.618",
                yAxis: 0.618,
                itemStyle: {
                  color: "rgba(227,253,189, 0.6)",
                  borderWidth: 2,
                  borderType: "dashed",
                  borderColor: "rgba(178,255,62, 0.6)",
                },
              },
              {
                yAxis: 0.786,
              },
            ],
            [
              {
                name: "0.786",
                yAxis: 0.786,
                itemStyle: {
                  color: "#F7D7D6",
                  borderWidth: 2,
                  borderType: "dashed",
                  borderColor: "#FED0D1",
                },
              },
              {
                yAxis: 1,
              },
            ],
            [
              {
                name: "1.00",
                yAxis: 1,
                itemStyle: {
                  color: "#F7D7D6",
                  borderWidth: 2,
                  borderType: "dashed",
                  borderColor: "#FED0D1",
                },
              },
              {
                yAxis: 1,
              },
            ],
          ],
        },
      })),
    };
  }, [seriesData]);

  const onRowOriginalClick = (record: OriginalPair) => {
    if (record) {
      setOriginalPairSelected(record);
    }
  };

  const rowClassName = (record: any) => {
    const selectedRowKey = originalPairSelected.key;
    return record.key === selectedRowKey ? "row-active" : "";
  };

  return (
    <div className="max-w-8xl">
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 mt-6">
        <div className="col-span-3 lg:col-span-1 order-2 lg:order-1 border border-[#E7E7E7] rounded-xl">
          <div className="p-6">
            <div className="text-black text-lg leading-7 font-bold text-center">
              Pair List
            </div>
            <Table
              dataSource={originalPairList}
              size="middle"
              pagination={false}
              scroll={{ y: 460 }}
              className="mt-4 header-color ant-table-custom"
              loading={originalPairListLoading}
              onRow={(record) => ({
                onClick: () => onRowOriginalClick(record),
              })}
              rowClassName={rowClassName}
            >
              <Column
                title="Name"
                dataIndex="symbol"
                key="symbol"
                align="left"
                render={(symbol: string) => (
                  <div className="leading-5 text-sm text-black cursor-pointer truncate">
                    {symbol}
                  </div>
                )}
              />
              <Column
                title="Time"
                dataIndex="discoveredOn"
                key="discoveredOn"
                align="right"
                className="cursor-pointer truncate"
              />
            </Table>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2 order-1 lg:order-2 border border-[#E7E7E7] rounded-xl relative">
          <ArrowsOutSimple
            weight="bold"
            width={24}
            height={24}
            className="absolute right-6 top-8 z-20 cursor-pointer"
            onClick={handle.enter}
          />
          <FullScreen
            handle={handle}
            className="flex items-center justify-around h-full"
          >
            <div className="w-full">
              {fibonacciChartLoading ? (
                <div className="flex justify-center">
                  <Spin size="large" />
                </div>
              ) : (
                <ReactECharts
                  option={fibonacciChartOptions}
                  style={{ height: "604px", width: "100%" }}
                  notMerge
                />
              )}
            </div>
          </FullScreen>
        </div>
        <div className="col-span-3 lg:col-span-1 order-3 border border-[#E7E7E7] rounded-xl">
          <div className="p-6">
            <div className="text-black text-lg leading-7 font-bold text-center">
              Similar Pairs
            </div>
            <Table
              dataSource={similarPairList}
              size="middle"
              pagination={false}
              scroll={{ y: 460 }}
              rowSelection={similarPairsSelection}
              className="mt-4 header-color ant-table-custom"
              loading={similarPairListLoading}
            >
              <Column
                title="Name"
                dataIndex="similarSymbol"
                key="similarSymbol"
                align="left"
              />
              <Column
                title="Time"
                dataIndex="similarStartDate"
                key="similarStartDate"
                align="right"
                render={(dateTime: string) => (
                  <>
                    <div
                      key={dateTime}
                      className="leading-5 text-sm text-black cursor-pointer truncate"
                    >
                      {dayjs(dateTime).format("HH:mm - DD/MM")}
                    </div>
                  </>
                )}
              />
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
