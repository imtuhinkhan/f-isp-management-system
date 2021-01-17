import React, { Component } from 'react'
import moment from 'moment'
import OverallPDF from './OverallPDF'
import { PDFViewer,PDFDownloadLink } from '@react-pdf/renderer';


export default class OverallReport extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             report:this.props.data.report,
             totalBill:this.props.data.totalBill,
             totalExpense:this.props.data.totalExpense,
             totalMargin:this.props.data.totalMargin

        }
    }
    componentDidMount(){
        
        console.log(this.state.report);
    }
    render() {
        return (
            <>
            <PDFDownloadLink document={<OverallPDF data={this.props.data}  />} fileName="overall_report.pdf" style={{float:'right'}}>
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
                <table id="data-table" class="table">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Date</th>
                            <th>Collection Amount</th>
                            <th>Expense</th>
                            <th>Net Margin</th>
                        </tr>
                    </thead>
                    <tbody>
                      {this.state.report.map((value, index) => (
                            <tr key={index}>
                                <td >{index+1}</td>
                                <td>{moment(value.date).format("MMMM Do, YYYY")}</td>
                                <td>{value.bill}</td>
                                <td>{value.expense}</td>
                                <td>{value.margin}</td>

                            </tr>
                        ))}
                        <tr>
                            <td colSpan="2">Total</td>
                            <td>{this.state.totalBill}</td>
                            <td>{this.state.totalExpense}</td>
                            <td>{this.state.totalMargin}</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}
