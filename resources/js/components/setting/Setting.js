import React, { Component } from 'react'
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Package from './Package';
export default class Setting extends Component {
    render() {
        return (
            <>
                <Header />
                <Sidebar/>
                
                <div className="page-container">
                    <div className="main-content">
                        <div className="row">
                            <Package/>
                        </div>

                        <Footer/>
                    </div>
                </div>
            </>
        )
    }
}
