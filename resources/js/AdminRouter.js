import React, { Component } from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'
import Client from './components/client/Client'
import ClientForm from './components/client/ClientForm'
import ClientEdit from './components/client/ClientEdit'

import User from './components/users/User'
import UserForm from './components/users/UserForm'
import UserEdit from './components/users/UserEdit'

import Setting from './components/setting/Setting'
import PackageFrom from './components/setting/PackageFrom'
import PackageEdit from './components/setting/PackageEdit'

import Expense from './components/expense/Expense'
import ExpenseFrom from './components/expense/ExpenseFrom'
import ExpenseEdit from './components/expense/ExpenseEdit'

import BillList from './components/bill/BillList'
import Bill from './components/bill/Bill'

import ReportIndex from './components/report/ReportIndex'
import BillHistory from './components/bill/BillHistory'
import BillCollectionReport from './components/report/BillCollectionReport'


import { Switch, Route} from "react-router-dom";
import GuestRoute from './GuestRoute'
import ProtectedRoute from './ProtectedRoute'


export default class AdminRouter extends Component {
  render() {
    return (
            <Switch>
                    <GuestRoute exact path="/" component={Login} />
                    <ProtectedRoute exact path="/dashboard" component={Dashboard} />

                    <ProtectedRoute exact path="/clients" component={Client} />
                    <ProtectedRoute exact path="/client/new" component={ClientForm} />
                    <ProtectedRoute exact path="/client/edit/:id" component={ClientEdit} />

                    <ProtectedRoute exact path="/user" component={User} />
                    <ProtectedRoute exact path="/user/new" component={UserForm} />
                    <ProtectedRoute exact path="/user/edit/:id" component={UserEdit} />


                    <ProtectedRoute exact path="/setting" component={Setting} />
                    <ProtectedRoute exact path="/package/new" component={PackageFrom} />
                    <ProtectedRoute exact path="/package/edit/:id" component={PackageEdit} />

                    <ProtectedRoute exact path="/expense" component={Expense} />
                    <ProtectedRoute exact path="/expense/new" component={ExpenseFrom} />
                    <ProtectedRoute exact path="/expense/edit/:id" component={ExpenseEdit} />

                    <ProtectedRoute exact path="/bill" component={BillList} />
                    <ProtectedRoute exact path="/bill/new" component={Bill} />
                    <ProtectedRoute exact path="/bill/collection/report" component={BillCollectionReport} />
                    <ProtectedRoute exact path="/client/history/:id" component={BillHistory} />
                    <ProtectedRoute exact path="/report" component={ReportIndex} />


                    <ProtectedRoute path="*" component={NotFound}/> 
                </Switch>
            
    )
  }
}
