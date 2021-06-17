import React from 'react';
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
    const dataPointValues = props.dataPoints.map(value => value.value);
    const totalMaximum = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) =>
                <ChartBar
                    key = {dataPoint.label}
                    value={dataPoint.value}
                    label={dataPoint.label}
                    maxValue={totalMaximum}
                />
            )}
        </div>
    );
}
export default Chart;