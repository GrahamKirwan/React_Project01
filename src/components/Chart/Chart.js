import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {

    const dataPointValues = props.dataPoint.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoint.map((dataPoint) => {
                return(
                    <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label}></ChartBar>
                )
            })}
        </div>
    )
}

export default Chart;