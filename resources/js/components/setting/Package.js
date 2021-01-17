import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {viewPackage,deletePackage} from '../../services/package'

import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Swal from 'sweetalert2'

export default class Package extends Component {
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
                    name: 'Package Name',
                    selector: 'name',
                    sortable: true,
                  },
                  {
                    name: 'Price',
                    selector: 'price',
                    sortable: true,
                  },                  
                  {
                    name: 'Action',
                    cell: row =><><Link to={`/package/edit/${row.id}`} className="warning" style={{color:'#FF9800'}} title="Edit"><i className="fa fa-edit"></i></Link>
                    <i className="fa fa-trash"  style={{color:'#fa0625eb', marginLeft:'10px',cursor:'pointer'}} title="Delete" onClick={()=>this.packageDelete(row.id)}></i>
                    </>,
                  }
             ],
             isLoading: true,
             error:''
        }
    }
    async getData(){
        const res = await viewPackage()
        this.setState({data: res.data.data, sl:0})
        const columns = this.state.columns;
        const data = this.state.data;
        this.setState({tableData:{columns,data}})
    }
    componentDidMount(){
        this.getData()
    }
    
    packageDelete=(e)=>{
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
                deletePackage(e).then((res)=>{
                Swal.fire({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        icon: 'success',
                        title: 'Package Removed'
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

    render() {
        return (
            <div className="col-md-12 col-lg-8">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>Packages</h5>
                            <div>
                                <div className="btn-group">
                                <Link className="btn btn-success btn-sm" style={{float:"right"}} to="/package/new">+ Add New Package</Link>
                                
                                </div>
                            </div>
                        </div>
                        <div className="m-t-50" style={{height: "330px"}}>
                        <DataTableExtensions
                                    {...this.state.tableData}
                                    export={false}
                                    print={false}
                                    filterPlaceholder="Search Package"
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
        )
    }
}
