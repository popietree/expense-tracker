import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  //transform the data point object to a value, return array of number for max
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  console.log(dataPointValues);
  //max expects list of args, not array
  const totalMaximum = Math.max(...dataPointValues);

  // const totalMaximum = Math.max(...dataPointValues);
  //to output in jsx code
  // const data = ;
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
