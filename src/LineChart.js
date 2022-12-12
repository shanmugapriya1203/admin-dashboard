import React from 'react'
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
import { Doughnut, Line } from 'react-chartjs-2';
import Projects from './Projects';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 

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


function LineChart() {
  return (
   <>

<div className='row'>
                     <div class="col-xl-8 col-lg-7">
                        <div class="card shadow mb-4">
                               
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                    <div class="dropdown no-arrow">
                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div class="dropdown-header">Dropdown Header:</div>
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
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
                                </div>
                            </div>
                        </div>
                      <div className='col-lg-4'>
                      <div class="card shadow mb-4">
                             
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                    <div class="dropdown no-arrow">
                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div class="dropdown-header">Dropdown Header:</div>
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>

                              <Doughnut data={{
                                   labels: ["Direct", "Social", "Referal"],
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
                              <div class="mt-4 text-center small">
                                        <span class="mr-2">
                                           <FontAwesomeIcon icon={faCircle}/> Direct
                                        </span>
                                        <span class="mr-2">
                                            <i class="fas fa-circle text-success"></i> Social
                                        </span>
                                        <span class="mr-2">
                                            <i class="fas fa-circle text-info"></i> Referral
                                        </span>
                                    </div>
                            </div>
                            </div>
                            </div>
                     

<Projects/>
   </>

  )
}

export default LineChart
