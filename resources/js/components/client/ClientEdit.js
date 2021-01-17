import React, { Component } from 'react'
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import { Redirect,Link,withRouter} from "react-router-dom";
import {findClientById,updateClient} from '../../services/client'
import {viewPackage} from '../../services/package'

import Swal from 'sweetalert2'

class ClientEdit extends Component {
    constructor(props) {
        super(props)    
        this.state = {
            clientName:'',
            userName:'',
            package:'',
            phone:'',
            address:'',
            isLoading: false,
            error:'',
            packageList:[],
        }
    }
    
    componentDidMount(){
        viewPackage().then((res)=>{
            this.setState({packageList: res.data.data})
        }).catch(e=>{console.log(e)})

        findClientById(this.props.match.params.id).then((res)=>{
            this.setState({
                clientName:res.data.client_name,
                userName:res.data.user_name,
                package:res.data.package,
                phone:res.data.phone,
                address:res.data.address,
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
            clientName:this.state.clientName,
            userName:this.state.userName,
            package:this.state.package,
            phone:this.state.phone,
            address:this.state.address,
        }
        const response = await updateClient(postBody,this.props.match.params.id);
        if(response.success){   
            history.push('/clients')                   
              Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'success',
                title: 'Client Information Updated'
              })
        }else{
            this.setState({isLoading:false})
            Swal.fire({
                icon: 'error',
                title: 'Oops... Something went wrong!',
                text: response.error,
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
                                <h4>Edit client information</h4>
                                <div className="m-t-25">
                                    <form onSubmit={(e)=>this.submitFrom(e)}>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="clientName">Client Name</label>
                                                    <input type="text" className="form-control" id="clientName" placeholder="eg. Tuhin Khan" name="clientName" value={this.state.clientName} onChange={(e)=>this.changeInput(e)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="userName">User Name</label>
                                                    <input type="text" className="form-control" id="userName" placeholder="eg. tuhin" name="userName" value={this.state.userName} onChange={(e)=>this.changeInput(e)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="package">Package</label>
                                                    <select className="form-control" name="package" onChange={(e)=>this.changeInput(e)} value={this.state.package}>
                                                    <option selected disabled>Select Package</option>
                                                    {this.state.packageList.map(item => (
                                                        <option key={item.id} value={item.id}>
                                                        {item.name}
                                                        </option>
                                                    ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="address">Address</label>
                                                    <input type="text" className="form-control" id="address" placeholder="eg. Bhagalpur" name="address" value={this.state.address} onChange={(e)=>this.changeInput(e)} />
                                                </div>
                                            </div>
                                            
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="phone">Phone </label>
                                                    <input type="text" className="form-control" id="phone"  name="phone" value={this.state.phone} onChange={(e)=>this.changeInput(e)} />
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
                </div></>
        )
    }
}

export default withRouter(ClientEdit)
