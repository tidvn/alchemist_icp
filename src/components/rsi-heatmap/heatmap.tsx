"use client";
import React, { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import classNames from "classnames";

interface EChartComponentProps {
  className?: string;
  nameCoins: string[]; // Array of coin names
  data: [number, number][]; // Array of data points (coinRank, rsiValue)
  rateCompared: number[]; // Array of rate changes compared to the previous period
}

export const HeatMapChart = ({
  className,
  nameCoins,
  data,
  rateCompared,
}: EChartComponentProps) => {
  const thresholdValues = [0, 30, 40, 60, 70, 100];
  const zoneColors = ["#65a87a", "#829F8B", "#939393", "#D86D66", "#CD534A"];
  const getColor = (value: any) => {
    if (value >= thresholdValues[0] && value <= thresholdValues[1]) {
      return zoneColors[0];
    } else if (value >= thresholdValues[1] && value <= thresholdValues[2]) {
      return zoneColors[1];
    } else if (value >= thresholdValues[2] && value <= thresholdValues[3]) {
      return zoneColors[2];
    } else if (value >= thresholdValues[3] && value <= thresholdValues[4]) {
      return zoneColors[3];
    } else {
      return zoneColors[4];
    }
  };

  const averageRSI = useMemo(() => {
    if (data.length === 0) {
      return 0; // Hoặc giá trị mặc định khác nếu data rỗng
    }

    const totalRSI = data.reduce((sum, item) => sum + item[1], 0); // Tính tổng RSI
    return totalRSI / data.length; // Tính trung bình
  }, [data]); // Chỉ tính toán lại khi data thay đổi

  const option = {
    dataZoom: [
      {
        type: "slider", // Hoặc 'slider' nếu bạn muốn thanh trượt dataZoom
        xAxisIndex: [0], // Chỉ định trục xAxis áp dụng dataZoom
        start: 20, // Phần trăm bắt đầu hiển thị (0 = 0%)
        end: 50, // Phần trăm kết thúc hiển thị (100 = 100%)
        zoomLock: true,
        realtime: false,
      },
    ],
    grid: {
      z: 10,
      left: 30,
      right: 10,
      top: 20,
      bottom: 20,
    },
    tooltip: {
      show: true,
      formatter: function (params: any) {
        return `<div>${params.name}<br />RSI: ${params.value[1]}</div>`;
      },
    },
    xAxis: {
      name: "Coin Rank",
      nameLocation: "middle",
      nameTextStyle: {
        padding: 20,
      },
      axisLabel: {
        color: "#333333",
        inside: false,
        showMaxLabel: false,
        showMinLabel: false,
      },
      min: 0,
      max: nameCoins.length + 5,
      interval: 20,
    },
    yAxis: {
      name: "RSI(4h)",
      nameLocation: "middle",
      nameTextStyle: {
        padding: 20,
      },
      axisLabel: {
        inside: false,
        showMaxLabel: false,
        showMinLabel: false,
        color: "#333333",
      },
      min: 0,
      max: 100,
      interval: 10,
    },
    series: [
      {
        symbolSize: 20,
        data: data?.map((item, index) => ({
          value: item,
          name: nameCoins[index],
          label: {
            show: true,
            position: "top",
            formatter: (params: any) => params.name,
          },
        })),
        itemStyle: {
          color: (params: any) => getColor(params.value[1]),
        },
        markPoint: {
          symbol: "line",
          silent: true,
          position: "top",

          // xoay đường nét đứt ở mỗi điểm, xoay ngược lại
          symbolRotate: 90,

          // chỗ này thể hiện phàn trăm so với ngày trước đó
          // symbolSize: 100,

          // // số thứ 2 bằnd một nửa của symbolSize
          // symbolOffset: [0, 40.12],

          symbolSize: function (value: any, params: any) {
            if (Math.abs(rateCompared[params.data.coord[0]]) > 20) {
              return 100;
            } else if (Math.abs(rateCompared[params.data.coord[0]]) < 3) {
              return 12;
            }
            return Math.abs(rateCompared[params.data.coord[0]]) * 5;
          },

          // số thứ 2 bằnd một nửa của symbolSize
          symbolOffset: function (value: any, params: any) {
            if (Math.abs(rateCompared[params.data.coord[0]]) > 20) {
              if (rateCompared[params.data.coord[0]] >= 0) {
                return [0, 50];
              } else {
                return [0, -50];
              }
            } else if (Math.abs(rateCompared[params.data.coord[0]]) < 3) {
              if (rateCompared[params.data.coord[0]] >= 0) {
                return [0, 6];
              } else {
                return [0, -6];
              }
            }

            return [0, rateCompared[params.data.coord[0]] * 2.5];
          },

          itemStyle: {
            borderWidth: 2,
            borderType: "dotted",
          },
          data: data?.map(function (item, index) {
            return {
              coord: [item[0], item[1]],
              itemStyle: {
                color: rateCompared[index] >= 0 ? "#22AB94" : "#eb3434",
              },
            };
          }),
        },
        markArea: {
          silent: true,
          label: {
            show: true,
            fontSize: 18,
            color: "#90959e",
            position: "insideRight",
            offset: [-80, 0],
          },
          emphasis: {
            disabled: true,
          },
          data: [
            [
              {
                name: "OVERSOLD",
                yAxis: 0,
                itemStyle: {
                  color: "rgba(209,224,208,0.95)",
                  borderWidth: 2,
                  borderType: "dashed",
                  borderColor: "#008001",
                },
              },
              {
                yAxis: 30,
              },
            ],
            [
              {
                name: "WEAK",
                yAxis: 30,
                itemStyle: {
                  color: "rgba(216,245,225,0.95)",
                  borderWidth: 2,
                  borderType: "dashed",
                  borderColor: "#00CC66",
                },
              },
              {
                yAxis: 40,
              },
            ],
            [
              {
                name: "NEUTRAL",
                yAxis: 40,
                itemStyle: {
                  color: "rgba(255,255,255,0.95)",
                },
              },
              {
                yAxis: 60,
              },
            ],
            [
              {
                name: "STRONG",
                yAxis: 60,
                itemStyle: {
                  color: "rgba(255,231,233,0.95)",
                  borderWidth: 2,
                  borderType: "dashed",
                  borderColor: "#FED0D1",
                },
              },
              {
                yAxis: 70,
              },
            ],
            [
              {
                name: "OVERBOUGHT",
                yAxis: 70,
                itemStyle: {
                  color: "rgb(233,196,194, 0.95)",
                  borderWidth: 2,
                  borderType: "dashed",
                  borderColor: "#FF0000",
                },
              },
              {
                yAxis: 100,
              },
            ],
          ],
        },
        type: "scatter",
        markLine: {
          silent: true,
          symbol: ["none", "none"],
          label: {
            show: true,
            position: "insideEndTop",
            formatter: "AVG RSI:{c}",
            color: "rgb(234,151,62)",
            fontSize: 18,
            distance: [30, 10],
          },
          lineStyle: {
            type: "dashed",
            color: "rgb(234,151,62)",
            width: 2,
          },
          data: [{ yAxis: averageRSI }],
        },
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "604px", width: "100%" }}
      className={classNames(className)}
    />
  );
};
