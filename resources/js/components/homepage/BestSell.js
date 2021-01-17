import React from 'react';
import ReactDOM from 'react-dom';
import {
    Link
  } from "react-router-dom";


function BestSell() {
    return (
    <div className="col-md-12 col-lg-8">
        <div className="card">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5>Top Product</h5>
                    <div>
                        <Link to="/" className="btn btn-sm btn-default">View All</Link>
                    </div>
                </div>
                <div className="m-t-30">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Sales</th>
                                    <th>Earning</th>
                                    <th style={{maxWidth: "70px"}}>Stock Left</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="media align-items-center">
                                            <div className="avatar avatar-image rounded">
                                                <img src="assets/images/others/thumb-9.jpg" alt="" />
                                            </div>
                                            <div className="m-l-10">
                                                <span>Gray Sofa</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>81</td>
                                    <td>$1,912.00</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="progress progress-sm w-100 m-b-0">
                                                <div className="progress-bar bg-success" style={{width: "82%"}}></div>
                                            </div>
                                            <div className="m-l-10">
                                                82
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="media align-items-center">
                                            <div className="avatar avatar-image rounded">
                                                <img src="assets/images/others/thumb-10.jpg" alt="" />
                                            </div>
                                            <div className="m-l-10">
                                                <span>Gray Sofa</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>26</td>
                                    <td>$1,377.00</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="progress progress-sm w-100 m-b-0">
                                                <div className="progress-bar bg-success" style={{width: "61%"}}></div>
                                            </div>
                                            <div className="m-l-10">
                                                61
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="media align-items-center">
                                            <div className="avatar avatar-image rounded">
                                                <img src="assets/images/others/thumb-11.jpg" alt="" />
                                            </div>
                                            <div className="m-l-10">
                                                <span>Wooden Rhino</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>71</td>
                                    <td>$9,212.00</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="progress progress-sm w-100 m-b-0">
                                                <div className="progress-bar bg-danger" style={{width: "23%"}}></div>
                                            </div>
                                            <div className="m-l-10">
                                                23
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="media align-items-center">
                                            <div className="avatar avatar-image rounded">
                                                <img src="assets/images/others/thumb-12.jpg" alt="" />
                                            </div>
                                            <div className="m-l-10">
                                                <span>Red Chair</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>79</td>
                                    <td>$1,298.00</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="progress progress-sm w-100 m-b-0">
                                                <div className="progress-bar bg-warning" style={{width: "54%"}}></div>
                                            </div>
                                            <div className="m-l-10">
                                                54
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="media align-items-center">
                                            <div className="avatar avatar-image rounded">
                                                <img src="assets/images/others/thumb-13.jpg" alt="" />
                                            </div>
                                            <div className="m-l-10">
                                                <span>Wristband</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>60</td>
                                    <td>$7,376.00</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="progress progress-sm w-100 m-b-0">
                                                <div className="progress-bar bg-success" style={{width: "76%"}}></div>
                                            </div>
                                            <div className="m-l-10">
                                                76
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default BestSell;
