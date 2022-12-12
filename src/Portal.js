import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import TopBar from './TopBar'

function Portal() {
  return (
    <>
 <div id='wrapper'>
    <SideBar/>
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <TopBar/>
      <div class="container-fluid">
       <Outlet></Outlet>
        
    </div>
    </div>
     <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2020</span>
                    </div>
                </div>
            </footer> 
    </div>
   
    </div>
  </>
  )
}

export default Portal
