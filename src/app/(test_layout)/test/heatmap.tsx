"use client";
import React from "react";
import ReactECharts from "echarts-for-react";

const EChartComponent = () => {
  const nameCoins = ["BTC", "ETH", "SOL"];
  const data = [
    [14, 55],
    [8, 79],
    [80, 25],
  ];
  const thresholdValues = [20, 30, 40, 60, 70, 80];
  const zoneColors = ["#65a87a", "#829F8B", "#939393", "#D86D66", "#CD534A"];
  const rateCompared = [20.75, -7.82, 9.21];

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

  const option = {
    grid: {
      z: 10,
      left: 30,
      right: 20,
      top: 30,
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
        inside: true,
        showMaxLabel: false,
        showMinLabel: false,
        color: "black",
      },
      min: 0,
      max: 160,
      interval: 20,
    },
    yAxis: {
      name: "RSI(4h)",
      nameLocation: "middle",
      nameTextStyle: {
        padding: 20,
      },
      axisLabel: {
        inside: true,
        showMaxLabel: false,
        showMinLabel: false,
        color: "black",
      },
      min: 20,
      max: 80,
      interval: 10,
    },
    series: [
      {
        symbolSize: 20,
        data: data.map((item, index) => ({
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
          symbolRotate: 90,
          symbolSize: (value: any, params: any) => {
            if (Math.abs(rateCompared[params.dataIndex]) > 20) {
              return 100;
            } else if (Math.abs(rateCompared[params.dataIndex]) < 3) {
              return 12;
            }
            return Math.abs(rateCompared[params.dataIndex]) * 5;
          },
          symbolOffset: (value: any, params: any) => {
            if (Math.abs(rateCompared[params.dataIndex]) > 20) {
              return [0, rateCompared[params.dataIndex] >= 0 ? 50 : -50];
            } else if (Math.abs(rateCompared[params.dataIndex]) < 3) {
              return [0, rateCompared[params.dataIndex] >= 0 ? 6 : -6];
            }
            return [0, rateCompared[params.dataIndex] * 2.5];
          },
          itemStyle: {
            borderWidth: 2,
            borderType: "dotted",
          },
          data: data.map((item, index) => ({
            coord: [item[0], item[1]],
            itemStyle: {
              color: rateCompared[index] >= 0 ? "#22AB94" : "#eb3434",
            },
          })),
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
                yAxis: 20,
                itemStyle: {
                  color: "rgba(209,224,208,0.8)",
                  borderWidth: 2,
                  borderType: "dashed",
                  borderColor: "#008001",
                },
              },
              { yAxis: 30 },
            ],
            [
              {
                name: "WEAK",
                yAxis: 30,
                itemStyle: {
                  color: "rgba(216,245,225,0.8)",
                  borderWidth: 2,
                  borderType: "dashed",
                  borderColor: "#00CC66",
                },
              },
              { yAxis: 40 },
            ],
            [
              {
                name: "NEUTRAL",
                yAxis: 40,
                itemStyle: {
                  color: "rgba(255,255,255,0.8)",
                },
              },
              { yAxis: 60 },
            ],
            [
              {
                name: "STRONG",
                yAxis: 60,
                itemStyle: {
                  color: "rgba(255,231,233,0.8)",
                  borderWidth: 2,
                  borderType: "dashed",
                  borderColor: "#FED0D1",
                },
              },
              { yAxis: 70 },
            ],
            [
              {
                name: "OVERBOUGHT",
                yAxis: 70,
                itemStyle: {
                  color: "rgb(233,196,194, 0.8)",
                  borderWidth: 2,
                  borderType: "dashed",
                  borderColor: "#FF0000",
                },
              },
              { yAxis: 80 },
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
          data: [{ yAxis: 53.8 }],
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: "604px", width: "100%" }} />
  );
};

export default EChartComponent;
