import React, { Component } from 'react'
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Swal from 'sweetalert2'
import {Link,Redirect} from "react-router-dom";
import {deleteExpense, viewExpense} from '../../services/expense'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import moment from 'moment'
export default class Expense extends Component {
    constructor(props) {
        super(props)    
        this.state = {
            tableData :{},
             sl:0,
             data:  [],
             columns:  [
                {
                    name: 'SL',
                    cell:row =><p>{++this.state.sl}</p>,
                    width:'5px'
                  },
                {
                    name: 'Expense Date',
                    sortable: true,
                    selector: 'amount',

                    cell: row =><>
                    {moment(row.expense_date).format("MMMM Do, YYYY")}
                    </>,
                  },
                  {
                    name: 'Amount',
                    selector: 'amount',
                    sortable: true,
                  },
                  {
                    name: 'Description',
                    selector: 'description',
                    sortable: true,
                  },               
                  
                  {
                    name: 'Action',
                    cell: row =><>
                    <Link to={`/expense/edit/${row.id}`} className="warning" style={{color:'#FF9800'}} title="Edit"><i className="fa fa-edit"></i></Link>
                    <i className="fa fa-trash"  style={{color:'#fa0625eb', marginLeft:'10px',cursor:'pointer'}} title="Delete" onClick={()=>this.expenseDelete(row.id)}></i>
                    </>,
                  }
             ],
             isLoading: true,
             isDownloading: false,
             error:''
        }
    }
    async getData(){
        const res = await viewExpense()
        this.setState({data: res.data.data, sl:0})
        const columns = this.state.columns;
        const data = this.state.data;
        this.setState({tableData:{columns,data}})
    }
    expenseDelete=(e)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {                
                deleteExpense(e).then((res)=>{
                Swal.fire({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        icon: 'success',
                        title: 'Expense Removed'
                      })
                }).catch((err)=>{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                      })
                });
                this.getData();              
            }
          })
    }

    componentDidMount(){
        this.getData();
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
                                    <Link className="breadcrumb-item" to="/expense">Expense List</Link>
                                </nav>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h4>Expenses
                                <Link className="btn btn-success btn-sm" style={{float:"right"}} to="/expense/new">+ Add Expense</Link>
                                    
                                </h4>
                                <div className="m-t-25">
                                <DataTableExtensions
                                    {...this.state.tableData}
                                    export={false}
                                    print={false}
                                    filterPlaceholder="Search Expense"
                                    >
                                        <DataTable
                                            columns={this.state.columns}
                                            data={this.state.data}
                                            pagination={true}
                                            noHeader={true}
                                            highlightOnHover
                                        />
                                        </DataTableExtensions>
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
