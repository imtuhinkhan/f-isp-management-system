import React, { Component } from 'react'
import { Redirect, Route} from "react-router-dom";
import Cookies from 'js-cookie'

function ProtectedRoute({ component:Component, ...rest }) {
    const token = Cookies.get('token')
    return (
      <Route
        {...rest}
        render={props =>
          token ? (
            <Component {...props}/>
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
export default ProtectedRoute;