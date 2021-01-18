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
import { viewClientBill } from '../../services/bill'
import { PDFViewer,PDFDownloadLink } from '@react-pdf/renderer';
import BillHistoryPDF from './BillHistoryPDF'
import moment from 'moment'
export default class BillHistory extends Component {
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
                    width:'10px'
                  },
                {
                    name: 'Collection Date',
                    sortable: true,
                    cell: row =><>
                    {moment(row.collection_date).format("MMMM Do, YYYY")}
                    </>,
                  },
                  {
                    name: 'Amount',
                    selector: 'amount',
                    sortable: true,
                  },
                  {
                    name: 'Remarks',
                    selector: 'description',
                    sortable: true,
                  },               
                  
             ],
             isLoading: true,
             isDownloading: false,
             error:'',
             client:'',
        }
    }
    async getData(){
        const res = await viewClientBill(this.props.match.params.id)
        this.setState({data: res.data.data,client:res.data.client,sl:0})
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
        this.getData()
    }
    render() {
        return (
            <>
                <Header />
                <Sidebar/>
                <div className="page-container">
                    
                    <div className="main-content">
                        <div className="page-header">
                            <h2 className="header-title">Bill</h2>
                            <div className="header-sub-title">
                                <nav className="breadcrumb breadcrumb-dash">
                                    <Link to="/dashboard" className="breadcrumb-item"><i className="anticon anticon-home m-r-5"></i>Home</Link>
                                    <Link className="breadcrumb-item" to="/bill">Bill List</Link>
                                </nav>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h4>{this.state.client.client_name}</h4>
                                <div className="m-t-25">
                                <PDFDownloadLink document={<BillHistoryPDF data={this.state.data} client={this.state.client} />} fileName="expense_report.pdf" style={{float:'right'}}>
                                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                                </PDFDownloadLink>
                                <DataTableExtensions
                                    {...this.state.tableData}
                                    export={false}
                                    print={false}
                                    filterPlaceholder="Search Bill"
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
