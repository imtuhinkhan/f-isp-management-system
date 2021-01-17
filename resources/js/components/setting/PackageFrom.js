import React, { Component } from 'react'
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import {storePacakge} from '../../services/package'
import { Redirect,Link,withRouter} from "react-router-dom";
import Swal from 'sweetalert2'

class PackageForm extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             packageName:'',
             price:'',
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
            packageName:this.state.packageName,
            price:this.state.price,
        }
        const response = await storePacakge(postBody);
        if(response.data.success){   
            history.push('/setting')                   
              Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'success',
                title: 'Package Information Added'
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
                                <h2 className="header-title">Package</h2>
                                <div className="header-sub-title">
                                    <nav className="breadcrumb breadcrumb-dash">
                                        <Link to="/dashboard" className="breadcrumb-item"><i className="anticon anticon-home m-r-5"></i>Home</Link>
                                        <Link className="breadcrumb-item" to="/setting">Package List </Link>
                                        <Link className="breadcrumb-item" to="#">Package Add </Link>
                                    </nav>
                                </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h4>Add new package</h4>
                                <div className="m-t-25">
                                    <form onSubmit={(e)=>this.submitFrom(e)}>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="packageName">Package Name</label>
                                                    <input type="text" className="form-control" id="packageName" placeholder="eg. 1GB" name="packageName" value={this.state.packageName} onChange={(e)=>this.changeInput(e)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="price">Price</label>
                                                    <input type="text" className="form-control" id="price" placeholder="eg. Package Price" name="price" value={this.state.price} onChange={(e)=>this.changeInput(e)} />
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

export default withRouter(PackageForm)
