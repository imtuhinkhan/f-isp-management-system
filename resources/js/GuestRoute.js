import React, { Component } from 'react'
import { Redirect, Route} from "react-router-dom";
import Cookies from 'js-cookie'

const GuestRoute = ({ component:Component, ...rest })=> {
    const token = Cookies.get('token')
    return (
      <Route
        {...rest}
        render={props =>
          !token ? (
            <Component {...props}/>
          ) : (
            <Redirect
              to={{
                pathname: "/dashboard",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
export default GuestRoute;