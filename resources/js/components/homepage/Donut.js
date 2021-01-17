import React from 'react';
import ReactDOM from 'react-dom';

function Donut() {
    return (        
        <div className="col-md-12 col-lg-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="m-b-0">Customers</h5>
                    <div className="m-v-60 text-center" style={{height: "200px"}}>
                        <canvas className="chart" id="customers-chart"></canvas>
                    </div>
                    <div className="row border-top p-t-25">
                        <div className="col-4">
                            <div className="d-flex justify-content-center">
                                <div className="media align-items-center">
                                    <span className="badge badge-success badge-dot m-r-10"></span>
                                    <div className="m-l-5">
                                        <h4 className="m-b-0">350</h4>
                                        <p className="m-b-0 muted">New</p>
                                    </div>    
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="d-flex justify-content-center">
                                <div className="media align-items-center">
                                    <span className="badge badge-secondary badge-dot m-r-10"></span>
                                    <div className="m-l-5">
                                        <h4 className="m-b-0">450</h4>
                                        <p className="m-b-0 muted">Returning</p>
                                    </div>    
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="d-flex justify-content-center">
                                <div className="media align-items-center">
                                    <span className="badge badge-warning badge-dot m-r-10"></span>
                                    <div className="m-l-5">
                                        <h4 className="m-b-0">100</h4>
                                        <p className="m-b-0 muted">Others</p>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Donut;

