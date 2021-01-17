import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link  } from "react-router-dom";
import {public_url} from '../config'
import {removeToken} from '../services/auth'
export default class Header extends Component {
    constructor(props) {
        super(props)  
    }
    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src = "../../../assets/js/app.min.js";
        this.div.appendChild(script);
      }
    render() {
    return (
        
        <div>
            <div className="App header" ref={el => (this.div = el)}>
                <div className="logo logo-dark">
                   <Link to="/dashboard">
                        <img src={`${public_url}assets/images/logo/logo.png`} alt="Logo" style={{marginTop:'15px'}} / >
                        <img className="logo-fold" src={`${public_url}assets/images/logo/logo-fold.png`} alt="Logo" />
                    </Link>
                </div>
                <div className="logo logo-white">
                   <Link to="/dashboard">
                        <img src={`${public_url}assets/images/logo/logo-white.png`} alt="Logo" />
                        <img className="logo-fold" src={`${public_url}assets/images/logo/logo-fold-white.png`} alt="Logo" />
                    </Link>
                </div>
                <div className="nav-wrap">
                    <ul className="nav-left">
                        <li className="desktop-toggle">
                            <Link to="#" >
                                <i className="anticon"></i>
                            </Link>
                        </li>
                        <li className="mobile-toggle">
                            <Link to="#">
                                <i className="anticon"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>  
        </div>
    )}
}


