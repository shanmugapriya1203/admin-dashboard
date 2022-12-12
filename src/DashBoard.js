import React from 'react'
import Card from './Card'


import { faCalendar, faCircle, faClipboard, faComments, faDollar } from '@fortawesome/free-solid-svg-icons';

import LineChart from './LineChart';



function DashBoard() {
 
  return (
    <>
       <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <div class="row">

                     <Card title="Earnings(Monthly)"  value="$40,000" color="primary" icon={faCalendar}/>
                     <Card title="EARNINGS (ANNUAL)" value="$215,000"color="success" icon={faDollar}/>
                     <Card title="TASKS" value="50%" color="info" icon={faClipboard} isprogress="true"/>
                     <Card title="PENDING REQUESTS" value="18"color="warning" icon={faComments}/>
                     </div>
               
             
                     <LineChart/>
                    </>
                    
  )


  }


export default DashBoard
