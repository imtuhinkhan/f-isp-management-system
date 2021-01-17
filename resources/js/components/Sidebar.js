import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,NavLink,useHistory 
  } from "react-router-dom";
  import '../App.css'
import Cookies from 'js-cookie'
import {logout} from '../services/auth'

function Sidebar(props) {
    const history = useHistory();
   const signout=async(e)=>{
        e.preventDefault();
        await logout().then(res=>{
            history.push({
                pathname:  "/",
                state: {
                  response: 'messageFromServer' 
                } 
             });
        }).catch(e=>console.log(e));
    }    
    return (
        <div className="side-nav">
                <div className="side-nav-inner">
                    <ul className="side-nav-menu scrollable">
                        <li className="nav-item">
                            <NavLink className="dropdown-toggle" to="/dashboard" activeClassName="activeClass">
                                <span className="icon-holder">
                                    <i className="anticon anticon-dashboard"></i>
                                </span>
                                <span className="title">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to="/clients" activeClassName="activeClass">
                                <span className="icon-holder">
                                <i class="anticon anticon-cluster"></i>
                                </span>
                                <span className="title">Clients</span>
                            </NavLink>
                        </li>
                        {/* <li className="nav-item ">
                            <NavLink to="/product" activeClassName="activeClass">
                                <span className="icon-holder">
                                <i class="anticon anticon-table"></i>
                                </span>
                                <span className="title">Product</span>
                            </NavLink>
                        </li>
                        <li className="active"> 
                            <NavLink to="/sale" activeClassName="activeClass">
                                <span className="icon-holder">
                                <i class="anticon anticon-shopping"></i>
                                </span>
                                <span className="title">Sales</span>
                            </NavLink>
                        </li> */}
                        <li className="nav-item ">
                            <NavLink to="/bill" activeClassName="activeClass">
                                <span className="icon-holder">
                                    <i className="anticon anticon-dollar"></i>
                                </span>
                                <span className="title">Bills</span>
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to="/expense" activeClassName="activeClass">
                                <span className="icon-holder">
                                    <i className="anticon anticon-dollar"></i>
                                </span>
                                <span className="title">Expense</span>
                            </NavLink>
                        </li>                       
                        
                        <li className="nav-item ">
                            <NavLink to="/user" activeClassName="activeClass">
                                <span className="icon-holder">
                                <i class="anticon anticon-user"></i>
                                </span>
                                <span className="title">User</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/report" activeClassName="activeClass">
                                <span className="icon-holder">
                                <i class="anticon anticon-bar-chart"></i>
                                </span>
                                <span className="title">Report</span>
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to="/setting" activeClassName="activeClass">
                                <span className="icon-holder">
                                <i class="anticon anticon-setting"></i>
                                </span>
                                <span className="title">Setting</span>
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to="#" onClick={(e)=>signout(e)}>
                                <span className="icon-holder">
                                <i class="anticon anticon-poweroff"></i>
                                </span>
                                <span className="title">Logout</span>
                            </NavLink>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <Link className="dropdown-toggle" to="javascript:void(0);">
                                <span className="icon-holder">
                                    <i className="anticon anticon-build"></i>
                                </span>
                                <span className="title">UI Elements</span>
                                <span className="arrow">
                                    <i className="arrow-icon"></i>
                                </span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="avatar.html">Avatar</Link>
                                </li>
                                <li>
                                    <Link to="alert.html">Alert</Link>
                                </li>
                                <li>
                                    <Link to="badge.html">Badge</Link>
                                </li>
                                <li>
                                    <Link to="buttons.html">Buttons</Link>
                                </li>
                                <li>
                                    <Link to="cards.html">Cards</Link>
                                </li>
                                <li>
                                    <Link to="icons.html">Icons</Link>
                                </li>
                                <li>
                                    <Link to="lists.html">Lists</Link>
                                </li>
                                <li>
                                    <Link to="typography.html">Typography</Link>
                                </li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div> 
    );
}

export default Sidebar;

