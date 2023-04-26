import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

//When the Chart componenet is being used somewhere in our App, we want to receive the dataPoints that should be plotted as props
//So that the Chart componenet is configurable
//Mapping just the value key into an array from the dataPoint object
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {/* Mapping every data point to a ChartBar */}
      {/* Expecting a dataPoints prop that holds a value that is an array */}
      {/* Map every single dataPoint into a ChartBar component. Creating as many ChartBar componenets as we have dataPoints*/}
      {/* ChartBar component should receive a key, value, maxValue, and label prop */}
      {/* This requires that in the ChartBar we read these props and define dataPoints, every dataPoint has a value property. dataPoint is an object with a value property */}
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
