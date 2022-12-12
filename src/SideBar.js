import { faChartArea, faCog, faCogs, faFolder, faSmileWink, faTable, faTachometerAlt, faWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
    const[isVisible,setVisible]=useState(false);
    const[isShow,setShow]=useState(false);
    const[isVis,setVis]=useState(false);
  return (
  <div>
       <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div class="sidebar-brand-icon rotate-n-15">
        <FontAwesomeIcon  icon={faSmileWink } size="2x"/>
    </div>
    <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</a>

<hr class="sidebar-divider my-0"></hr>


<li class="nav-item ">
   <Link class="nav-link" to="/portal/dashboard">
    <FontAwesomeIcon icon={faTachometerAlt}/>
       
        <span>Dashboard</span></Link>
</li>





<hr class="sidebar-divider"></hr>

<div class="sidebar-heading">
    Interface
</div>


<li className="nav-item"> 
 
                <button 
                    onClick={() => setVisible(!isVisible)} 
                    className={isVisible ? "nav-link " : "nav-link collapsed"} 
                    data-toggle="collapse" 
                    data-target="#collapseTwo" 
                    aria-controls="collapseTwo" 
                    aria-expanded={isVisible} 
                    style={{ border: "none", background: "none" }}><span> <FontAwesomeIcon icon={faCog} className="fa-fw"/> Components</span></button> 
 
                <div id="collapseTwo" className={isVisible ? "collapse show" : "collapse"} aria-labelledby="headingTwo" data-parent="#accordionSidebar"> 
                    <div className="bg-white py-2 collapse-inner rounded"> 
                        <h6 className="collapse-header">Custom Components:</h6> 
                        <Link className="collapse-item" to="/portal/buttons">Buttons</Link> 
                        <Link className="collapse-item" to="/portal/cards">Cards</Link> 
                    </div> 
                </div> 
            </li>

<li class="nav-item">
<button 
                    onClick={() => setShow(!isShow)} 
                    className={isShow ? "nav-link " : "nav-link collapsed"} 
                    data-toggle="collapse" 
                    data-target="#collapseTwo" 
                    aria-controls="collapseTwo" 
                    aria-expanded={isShow} 
                    style={{ border: "none", background: "none" }}><span> <FontAwesomeIcon icon={faWrench} className="fa-fw"/>Utilities</span></button> 
 
 <div id="collapseTwo" className={isShow ? "collapse show" : "collapse"} aria-labelledby="headingTwo" data-parent="#accordionSidebar"> 
                    <div className="bg-white py-2 collapse-inner rounded"> 
                        <h6 className="collapse-header">CUSTOM UTILITIES:</h6> 
                        <Link className="collapse-item" to="/portal/colors">Colors</Link> 
                        <Link className="collapse-item" to="/portal/borders">Borders</Link> 
                        <Link className="collapse-item" to="/portal/animations">Animations</Link> 
                        <Link className="collapse-item" to="/portal/Others">Others</Link> 
                    </div> 
                </div> 
            </li>


<hr class="sidebar-divider"></hr>

<div class="sidebar-heading">
    Addons
</div>

<li class="nav-item">
<button 
                    onClick={() => setVis(!isVis)} 
                    className={isVis ? "nav-link " : "nav-link collapsed"} 
                    data-toggle="collapse" 
                    data-target="#collapseTwo" 
                    aria-controls="collapseTwo" 
                    aria-expanded={isVis} 
                    style={{ border: "none", background: "none" }}><span> <FontAwesomeIcon icon={faFolder} className="fa-fw"/>Pages</span></button> 
 
 <div id="collapseTwo" className={isVis? "collapse show" : "collapse"} aria-labelledby="headingTwo" data-parent="#accordionSidebar"> 
                    <div className="bg-white py-2 collapse-inner rounded"> 
                        <h6 className="collapse-header">Login Screens</h6> 
                        <Link className="collapse-item" to="/">Login</Link> 
                        <Link className="collapse-item" to="/register">Register</Link> 
                        <Link className="collapse-item" to="/forgot">Forgot Password</Link> 
                        <h6 className="collapse-header">Other Pages</h6>
                        <Link className="collapse-item" to="/portal/404">404 Page</Link> 
                        <Link className="collapse-item" to="/portal/blank">Blank Page</Link>  
                    </div> 
                </div> 
            </li>

<li class="nav-item">
    <Link class="nav-link" to="/portal/charts">
        <FontAwesomeIcon icon={faChartArea} className="fa-fw"/>
        {/* <i class="fas fa-fw fa-chart-area"></i> */}
        <span>Charts</span></Link>
</li>


<li class="nav-item">
  <Link class="nav-link"  to="/portal/table">
       <FontAwesomeIcon icon={ faTable}/>
        <span>  Tables</span></Link>
</li>


<hr class="sidebar-divider d-none d-md-block"></hr>

{/* <!-- Sidebar Toggler (Sidebar) --> */}
{/* <div class="text-center d-none d-md-inline">
    <button class="rounded-circle border-0" id="sidebarToggle"></button>
</div> */}

{/* <!-- Sidebar Message --> */}
<div class="sidebar-card d-none d-lg-flex">
    {/* <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg"alt="..."></img> */}
    <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
    <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
</div>

</ul>
</div>
   
  )
}

export default SideBar


