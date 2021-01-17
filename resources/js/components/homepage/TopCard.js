import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {topCard} from '../../services/dashboard'


class TopCard extends Component {
    constructor(props) {
        super(props)    
        this.state = {
            totalClient:'',
            newClient:'',
            expense:'',
            bill:'',
        }
    }
    componentDidMount(){
        topCard().then((res)=>{
            this.setState({totalClient: res.data.data.totalClient,newClient: res.data.data.newClient,expense:res.data.data.expense,bill:res.data.data.bill})
        }).catch(e=>{console.log(e)})        
    }
    render() {
    return (        
        <div className="row">
            <div className="col-md-6 col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <div className="media align-items-center">
                            <div className="avatar avatar-icon avatar-lg avatar-blue">
                                <i className="anticon anticon-user"></i>
                            </div>
                            <div className="m-l-15">
                                <h2 className="m-b-0">{this.state.totalClient}</h2>
                                <p className="m-b-0 text-muted">Total Client</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <div className="media align-items-center">
                            <div className="avatar avatar-icon avatar-lg avatar-cyan">
                                <i className="anticon anticon-stock"></i>
                            </div>
                            <div className="m-l-15">
                                <h2 className="m-b-0">{this.state.newClient}</h2>
                                <p className="m-b-0 text-muted">New Client</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <div className="media align-items-center">
                            <div className="avatar avatar-icon avatar-lg avatar-gold">
                                <i className="anticon anticon-dollar"></i>
                            </div>
                            <div className="m-l-15">
                                <h2 className="m-b-0">{this.state.bill}</h2>
                                <p className="m-b-0 text-muted">Collection</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <div className="media align-items-center">
                            <div className="avatar avatar-icon avatar-lg avatar-purple">
                                <i className="anticon anticon-fall"></i>
                            </div>
                            <div className="m-l-15">
                                <h2 className="m-b-0">{this.state.expense}</h2>
                                <p className="m-b-0 text-muted">Expense</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default TopCard;

