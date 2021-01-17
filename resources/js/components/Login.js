import React, { Component } from 'react'
import {postLogin,userAuthenticationCheck} from '../services/auth'

export default class Login extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             email:'',
             password:'',
             isLoggedIn: false,
             error:'',
        }
    }

    changeInput(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleForm = async(e) =>{
        e.preventDefault();
        const  postBody = {
            email:this.state.email,
            password:this.state.password,
        }
        const response = await postLogin(postBody);
        if(response){
            this.props.history.push('/dashboard')
        }else{
            alert('invalid credential')
        }
        
    }
    render() {
        return (
            <>
                <div className="container-fluid p-0 h-100">
                    <div className="row no-gutters h-100 full-height">
                        <div className="col-lg-4 d-none d-lg-flex bg" style={{backgroundImage: "url(" + 'assets/images/others/login-1.jpg' + ")"}} >
                            <div className="d-flex h-100 p-h-40 p-v-15 flex-column justify-content-between">
                                <div>
                                    <img src="assets/images/logo/easy-logo-white.png" alt=""/>
                                </div>
                                <div>
                                    <h1 className="text-white m-b-20 font-weight-normal">Friend's ISP</h1>
                                    <p className="text-white font-size-16 lh-2 w-80 opacity-08"></p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="text-white">© 2020 TUHIN KHAN</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 bg-white">
                            <div className="container h-100">
                                <div className="row no-gutters h-100 align-items-center">
                                    <div className="col-md-8 col-lg-7 col-xl-6 mx-auto">
                                        <h2>Sign In</h2>
                                        <p className="m-b-30">Enter your credential to get access</p>
                                        <form  onSubmit={(e)=>this.handleForm(e)}>
                                            <div className="form-group">
                                                <label className="font-weight-semibold" for="email">Email:</label>
                                                <div className="input-affix">
                                                    <i className="prefix-icon anticon anticon-user"></i>
                                                    <input type="email" name='email' className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={(e)=>this.changeInput(e)}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="font-weight-semibold" for="password">Password:</label>
                                                <a className="float-right font-size-13 text-muted" href="">Forget Password?</a>
                                                <div className="input-affix m-b-10">
                                                    <i className="prefix-icon anticon anticon-lock"></i>
                                                    <input type="password" name='password' className="form-control" id="password" placeholder="Password" value={this.state.password} onChange={(e)=>this.changeInput(e)}/>
                                                </div>
                                            </div>
                                            {
                                                    this.state.error && (
                                                    <p className="alert alert-danger">{this.state.error}</p>
                                                    )
                                            }
                                            <div className="form-group">
                                                <div className="d-flex align-items-center justify-content-between">
                                                {
                                                    this.state.isLoading && (
                                                        <input type="submit" className="btn btn-primary" value="Signing in..." disabled/>
                                                    )
                                                }

                                                {
                                                    !this.state.isLoading && (
                                                        <input type="submit" className="btn btn-primary" value="Sign in" />
                                                    )
                                                }
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
