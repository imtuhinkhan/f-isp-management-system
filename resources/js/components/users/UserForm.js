import React, { Component } from 'react'
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import { Redirect,Link,withRouter} from "react-router-dom";
import {storeUser} from '../../services/user'

import Swal from 'sweetalert2'

class UserForm extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             name:'',
             email:'',
             password:'',
             password_confirmation:'',
             isLoading: false,
             error:'',
        }
    }
    
    componentDidMount(){
        
    }
    changeInput(e){
        this.setState({[e.target.name]: e.target.value})
    }
    async submitFrom(e){
        const { history } = this.props;
        this.setState({isLoading:true}) 
        e.preventDefault();
        const  postBody = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password_confirmation:this.state.password_confirmation,
        }
        const response = await storeUser(postBody);
        if(response.data.success){   
            history.push('/user')                   
              Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'success',
                title: 'User Information Updated'
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
                                <h2 className="header-title">User</h2>
                                <div className="header-sub-title">
                                    <nav className="breadcrumb breadcrumb-dash">
                                        <Link to="/dashboard" className="breadcrumb-item"><i className="anticon anticon-home m-r-5"></i>Home</Link>
                                        <Link className="breadcrumb-item" to="/user">User List</Link>
                                    </nav>
                                </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h4>Add new User</h4>
                                <div className="m-t-25">
                                    <form onSubmit={(e)=>this.submitFrom(e)}>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="name">Name</label>
                                                    <input type="text" className="form-control" id="name" placeholder="eg. Tuhin Khan" name="name" value={this.state.name} onChange={(e)=>this.changeInput(e)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="email">Email</label>
                                                    <input type="email" className="form-control" id="email" placeholder="eg. uiu.tuhin@gmail.com" name="email" value={this.state.email} onChange={(e)=>this.changeInput(e)} />
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="password">Password</label>
                                                    <input type="password" className="form-control" id="password" placeholder="eg. 123456" name="password" value={this.state.password} onChange={(e)=>this.changeInput(e)} />
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="password_confirmation">Confirm Password</label>
                                                    <input type="password" className="form-control" id="password_confirmation" placeholder="eg. 123456" name="password_confirmation" value={this.state.password_confirmation} onChange={(e)=>this.changeInput(e)} />
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

export default withRouter(UserForm)
