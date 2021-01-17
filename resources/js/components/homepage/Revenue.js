import React from 'react';
import ReactDOM from 'react-dom';

function Revenue() {
    return (
        <div className="col-md-12 col-lg-12">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5>Total Revenue</h5>
                        <div>
                            <div className="btn-group">
                                <button className="btn btn-default active">
                                    <span>Month</span>
                                </button>
                                <button className="btn btn-default">
                                    <span>Year</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="m-t-50" style={{height: "330px"}}>
                        <canvas className="chart" id="revenue-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Revenue;

