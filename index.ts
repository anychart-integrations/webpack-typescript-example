/// <reference types="anychart" />

import 'anychart';

function getColumnData():Array<number> {
  return [4, 2, 6, 8];
}

function getPieData():Array<number> {
  return [5, 2, 4];
}

let stage = anychart.graphics.create('container');

function setupChart(chart: anychart.charts.Cartesian | anychart.charts.Pie, bounds: Array<number|string>, labelsFormat: string) {
  chart.bounds.apply(chart, bounds);
  chart.labels({
    enabled: true,
    format: labelsFormat
  });
  chart.container(stage).draw();
}

let pieChart = anychart.pie(getPieData());
let columnChart = anychart.column(getColumnData());

setupChart(pieChart, [0, 0, '100%', '50%'], "P{%index}: {%Value}");
setupChart(columnChart, [0, '50%', '100%', '50%'], "Value: {%Value}");
