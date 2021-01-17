import React, { Component } from 'react'
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Swal from 'sweetalert2'
import download from 'downloadjs'
import {Link,Redirect} from "react-router-dom";
import {deleteClient, viewClient} from '../../services/client'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

export default class client extends Component {
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
                    name: 'Client Name',
                    sortable: true,
                    cell: row =><>
                    <Link to={`/client/history/${row.id}`} className="primary" title="View Details">{row.client_name}</Link>
                    </>,
                  },
                  {
                    name: 'Username',
                    selector: 'user_name',
                    sortable: true,
                  },
                  {
                    name: 'Phone',
                    selector: 'phone',
                    sortable: true,
                  },
                  {
                    name: 'Address',
                    selector: 'address',
                    sortable: true,
                  },
                  {
                    name: 'Package',
                    sortable: true,
                    cell: row =><><p>{row.package.name} ({row.package.price})</p></>
                  },
                  
                  {
                    name: 'Action',
                    cell: row =><>
                    <Link to={`/client/edit/${row.id}`} className="warning" style={{color:'#FF9800'}} title="Edit"><i className="fa fa-edit"></i></Link>
                    <i className="fa fa-trash"  style={{color:'#fa0625eb', marginLeft:'10px',cursor:'pointer'}} title="Delete" onClick={()=>this.clientDelete(row.id)}></i>
                    </>,
                  }
             ],
             isLoading: true,
             isDownloading: false,
             error:''
        }
    }
    async getData(){
        const res = await viewClient()
        this.setState({data: res.data.data, sl:0})
        const columns = this.state.columns;
        const data = this.state.data;
        this.setState({tableData:{columns,data}})
    }
    clientDelete=(e)=>{
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
                deleteClient(e).then((res)=>{
                Swal.fire({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        icon: 'success',
                        title: 'Client Removed'
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
                            <h2 className="header-title">Client</h2>
                            <div className="header-sub-title">
                                <nav className="breadcrumb breadcrumb-dash">
                                    <Link to="/dashboard" className="breadcrumb-item"><i className="anticon anticon-home m-r-5"></i>Home</Link>
                                    <Link className="breadcrumb-item" to="/clients">Client List</Link>
                                </nav>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h4>Clients
                                <Link className="btn btn-success btn-sm" style={{float:"right"}} to="/client/new">+ Add New Client</Link>
                                    
                                </h4>
                                <div className="m-t-25">
                                <DataTableExtensions
                                    {...this.state.tableData}
                                    export={false}
                                    print={false}
                                    filterPlaceholder="Search Client"
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
