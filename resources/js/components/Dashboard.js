import React, { Component } from 'react'
import BarChart from './homepage/BarChart'
import BestSell from './homepage/BestSell'
import TopCard from './homepage/TopCard'
import Revenue from './homepage/Revenue'
import Donut from './homepage/Donut'
import Footer from './Footer'
import { Redirect } from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
export default class Dashboard extends Component {
    render() {
        return (
            <>
            <Header />
            <Sidebar/>
            <div className="page-container">
                <div className="main-content">
                    <TopCard/> 
                    <BarChart/>
                    <Footer/>
                </div>
            </div>
            </>
        )
    }
}
