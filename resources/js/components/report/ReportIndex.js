import React, { Component } from 'react'
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import { Link } from "react-router-dom";
import { generateReport } from '../../services/report'
import ExpenseReport from './ExpenseReport'
import BillReport from './BillReport'
import OverallReport from './OverallReport'
import Swal from 'sweetalert2'


export default class ReportIndex extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             type:'',
             from_date:'',
             to_date:'',
             isLoading: false,
             generateReport:false,
             report:[],
             total:0

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
            type:this.state.type,
            from_date:this.state.from_date,
            to_date:this.state.to_date,
        }
        const response = await generateReport(postBody);
        console.log(response)

        if(response.data.success){
            this.setState(
                {
                    isLoading: false,
                    report:response.data.data,
                    total:response.data.total,
                    generateReport: true,

                }
            )
        }else{
            this.setState({isLoading: false})
            Swal.fire({
                icon: 'error',
                title: 'Oops... Something went wrong!',
                text: response.data.error,
              })
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
                                                <label for="bill_date"> Select Client</label>
                                                <select className='form-control' name="type" onChange={(e)=>this.changeInput(e)}>
                                                    <option disabled selected>Select Type</option>
                                                    <option value="1">Expense</option>
                                                    <option value='2'>Bill Collection</option>
                                                    <option value='3'>Overall</option>
                                                </select>
                                                </div>
                                            </div>

                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label for="from_date"> From Date</label>
                                                    <input type="date" className="form-control" id="from_date" placeholder="eg. Tuhin Khan" name="from_date" value={this.state.from_date} onChange={(e)=>this.changeInput(e)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label for="to_date"> To Date</label>
                                                    <input type="date" className="form-control" id="to_date" placeholder="eg. Tuhin Khan" name="to_date" value={this.state.to_date} onChange={(e)=>this.changeInput(e)} />
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
                                        this.state.type==1 && this.state.generateReport && (
                                            <ExpenseReport data={this.state.report} total={this.state.total}/>
                                        )
                                    }
                                    {
                                        this.state.type==2 && this.state.generateReport &&(
                                            <BillReport data={this.state.report} total={this.state.total}/>
                                        )
                                    }
                                    {
                                        this.state.type==3 && this.state.generateReport &&(
                                            <OverallReport data={this.state.report}/>
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
