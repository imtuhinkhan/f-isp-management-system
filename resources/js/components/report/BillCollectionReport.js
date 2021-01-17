import React, { Component } from 'react'
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import { Link } from "react-router-dom";
import { generateCollectionReport } from '../../services/report'
import BillCollection from './BillCollection'

export default class BillCollectionReport extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             year:'',
             month:'',
             yearName:'',
             monthName:'',
             isLoading: false,
             generateReport:false,
             report:[],

        }
    }
    
    componentDidMount(){        
        
    }
    changeInput(e){
        this.setState({[e.target.name]: e.target.value,generateReport: false})
    }
      async submitFrom(e){
        const { history } = this.props;
        this.setState({isLoading:true}) 
        e.preventDefault();
        const  postBody = {
            month:this.state.month,
            year:this.state.year,
        }
        const response = await generateCollectionReport(postBody);

        if(response){
            this.setState(
                {
                    isLoading: false,
                    report:response.data.bill,
                    client:response.data.client,
                    yearName:response.data.year,
                    monthName:response.data.month,
                    generateReport: true,

                }
            )
        }        
    }
    render() {
        return (
            <>
                <Header />
                <Sidebar/>
                <div className="page-container">
                    
                    <div className="main-content">
                        <div className="page-header">
                                <h2 className="header-title">Report</h2>
                                <div className="header-sub-title">
                                    <nav className="breadcrumb breadcrumb-dash">
                                        <Link to="/dashboard" className="breadcrumb-item"><i className="anticon anticon-home m-r-5"></i>Home</Link>
                                        <Link className="breadcrumb-item" to="/bill">Report</Link>
                                    </nav>
                                </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h4>Report</h4>
                                <div className="m-t-25">
                                <form onSubmit={(e)=>this.submitFrom(e)}>
                                        <div className="row">
                                        <div className="col-sm-4">                                        
                                                <div className="form-group">
                                                <label for="year"> Select Client</label>
                                                <select className='form-control' name="year" onChange={(e)=>this.changeInput(e)}>
                                                    <option disabled selected>Select Year</option>
                                                    <option value="2021">2021</option>
                                                    <option value='2022'>2020</option>
                                                    <option value='2023'>2023</option>
                                                    <option value='2024'>2024</option>
                                                    <option value='2025'>2025</option>
                                                </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">                                        
                                                <div className="form-group">
                                                <label for="month"> Select Month</label>
                                                <select className='form-control' name="month" onChange={(e)=>this.changeInput(e)}>
                                                    <option disabled selected>Select month</option>
                                                    <option value="1">January</option>
                                                    <option value='2'>February</option>
                                                    <option value='3'>March</option>
                                                    <option value='4'>April</option>
                                                    <option value='5'>May</option>
                                                    <option value='6'>June</option>
                                                    <option value='7'>July</option>
                                                    <option value='8'>August</option>
                                                    <option value='9'>September</option>
                                                    <option value='12'>October</option>
                                                    <option value='11'>November</option>
                                                    <option value='12'>December</option>
                                                </select>
                                                </div>
                                            </div>
                                               
                                        </div>
                                        
                                        {
                                            this.state.isLoading && (
                                                <input type="submit" className="btn btn-primary" value="Generating..." disabled/>
                                            )
                                        }

                                        {
                                            !this.state.isLoading && (
                                                <input type="submit" className="btn btn-primary" value="Generate" />
                                            )
                                        }
                                    </form>
                                    {
                                        this.state.generateReport && (
                                            <BillCollection data={this.state.report} client={this.state.client} monthName={this.state.monthName} yearName={this.state.yearName}/>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </>
        )
    }
}
