import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';
import { BarChart } from './BarChart';
  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function Charts() {
  return (
    <>
     <div class="container-fluid">


<h1 class="h3 mb-2 text-gray-800">Charts</h1>
<p class="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme.
    The charts below have been customized - for further customization options, please visit the <a
        target="_blank" href="https://www.chartjs.org/docs/latest/">official Chart.js
        documentation</a>.</p>


<div class="row">

    <div class="col-xl-8 col-lg-7">

        
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Area Chart</h6>
            </div>
            <div class="card-body">
                <div class="chart-area">
                <Line options={{
                             responsive: true,
                             plugins: {
                                 legend: {
                                     position: "top"
                                 },
                                 title: {
                                     display: false,
                                     text: "Chart.js Line Chart"
                                 }
                             }
                         
                         }} data={{
                            labels: ["Jan", "Mar", "May", "Jul", "Sep","Oct", "Nov","Dec"],
                            datasets: [
                                {
                                    fill: false,
                                    label: "Line chart",
                                    data: [
                                     0,10000,5000,15000,10000,20000,15000,25000,20000,30000,25000,40000
                        
                                    ],
                                    borderColor: "rgb(53, 162, 235)",
                                    backgroundColor: "rgba(45, 85, 255, 1)",
                                    lineTension: 0.3,
                                    pointHoverBorderWidth:3,
                                    borderCapStyle:"round",
                                    pointRadus:3,
                                    borderJoinStyle:"round",}
                            ]}}/>
                </div>
               
                Styling for the area chart can be found in the
                <code>/js/demo/chart-area-demo.js</code> file.
            </div>
        </div>

       
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Bar Chart</h6>
            </div>
            <div class="card-body">
                <div class="chart-bar">
                     <BarChart/>
              
                    
                </div>
           
                Styling for the bar chart can be found in the
                <code>/js/demo/chart-bar-demo.js</code> file.
            </div>
        </div>

    </div>

    <div class="col-xl-4 col-lg-5">
        <div class="card shadow mb-4">
           
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Donut Chart</h6>
            </div>
           
            <div class="card-body">
                <div class="chart-pie pt-4">
                <Doughnut data={{
                                   labels: "",
                                   datasets: [
                                       {
                                           label: " ",
                                           data: [55, 30, 15],
                                           backgroundColor: [
                                               "rgba(78,115,223,1)",
                                               "rgba(28,200,138,1)",
                                               "rgba(54,185,204,1)"
                                           ],
                                          
                                           borderwidth: 500,
                                           cutout: "83%"
                                       }
                                   ]
                              }}/>
                </div>
               
                Styling for the donut chart can be found in the
                <code>/js/demo/chart-pie-demo.js</code> file.
            </div>
        </div>
    </div>
</div>

</div>
    </>
  )
}

export default Charts
