import React, { Component } from 'react'
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import { Redirect,Link,withRouter} from "react-router-dom";
import {findExpenseById,updateExpense} from '../../services/expense'

import Swal from 'sweetalert2'

class ExpenseEdit extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             expense_date:'',
             amount:'',
             description:'',
             isLoading: false,
             error:'',
        }
    }
    
    componentDidMount(){
        findExpenseById(this.props.match.params.id).then((res)=>{
            this.setState({
                expense_date:res.data.expense_date,
                amount:res.data.amount,
                description:res.data.description
            })

        }).catch((err)=>{console.log(err)})
    }
    changeInput(e){
        this.setState({[e.target.name]: e.target.value})
    }
    async submitFrom(e){
        const { history } = this.props;
        this.setState({isLoading:true}) 
        e.preventDefault();
        const  postBody = {
            expense_date:this.state.expense_date,
            amount:this.state.amount,
            description:this.state.description
        }
        const response = await updateExpense(postBody,this.props.match.params.id);
        if(response.success){   
            history.push('/expense')                   
              Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'success',
                title: 'Expense Information Updated'
              })
        }else{
            this.setState({isLoading:false})
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
                                <h2 className="header-title">Expense</h2>
                                <div className="header-sub-title">
                                    <nav className="breadcrumb breadcrumb-dash">
                                        <Link to="/dashboard" className="breadcrumb-item"><i className="anticon anticon-home m-r-5"></i>Home</Link>
                                        <Link className="breadcrumb-item" to="/clients">Expense List</Link>
                                    </nav>
                                </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h4>Add new client</h4>
                                <div className="m-t-25">
                                    <form onSubmit={(e)=>this.submitFrom(e)}>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="expense_date">Expense Date</label>
                                                    <input type="date" className="form-control" id="expense_date" placeholder="eg. Tuhin Khan" name="expense_date" value={this.state.expense_date} onChange={(e)=>this.changeInput(e)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="amount">Amount</label>
                                                    <input type="text" className="form-control" id="amount" placeholder="eg. tuhin" name="amount" value={this.state.amount} onChange={(e)=>this.changeInput(e)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="description">Description</label>
                                                    <input type="text" className="form-control" id="description" placeholder="eg. Buying Router" name="description" value={this.state.description} onChange={(e)=>this.changeInput(e)} />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {
                                            this.state.isLoading && (
                                                <input type="submit" className="btn btn-primary" value="Saving..." disabled/>
                                            )
                                        }

                                        {
                                            !this.state.isLoading && (
                                                <input type="submit" className="btn btn-primary" value="Save" />
                                            )
                                        }
                                    </form>
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

export default withRouter(ExpenseEdit)
