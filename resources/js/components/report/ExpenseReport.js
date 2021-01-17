import React, { Component } from 'react'
import moment from 'moment'
import { PDFViewer,PDFDownloadLink } from '@react-pdf/renderer';
import ExpensePDF from './ExpensePDF'
export default class ExpenseReport extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             report:this.props.data,
             total:this.props.total

        }
    }
    componentDidMount(){        
    }
    render() {
        return (
            <>
            <PDFDownloadLink document={<ExpensePDF data={this.state.report} total={this.state.total} />} fileName="expense_report.pdf" style={{float:'right'}}>
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
                <table id="data-table" class="table">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Expense Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.report.map((value, index) => (
                            <tr>
                                <td key={index}>{index+1}</td>
                                <td>{moment(value.expense_date).format("MMMM Do, YYYY")}</td>
                                <td key={index}>{value.description}</td>
                                <td key={index}>{value.amount}</td>

                            </tr>
                        ))}
                        <tr>
                            <td colSpan="3"><strong>Total</strong></td>
                            <td><strong>{this.state.total}</strong></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}
