import React, { Component } from 'react'
import moment from 'moment'
import { PDFViewer,PDFDownloadLink } from '@react-pdf/renderer';
import BillPDF from './BillPDF'
export default class BillReport extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             report:this.props.data,
             total:this.props.total
        }
    }
    render() {
        return (
            <>
           <PDFDownloadLink document={<BillPDF data={this.state.report} total={this.state.total} />} fileName="bill_collection_report.pdf" style={{float:'right'}}>
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
                <table id="data-table" class="table">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Collection Date</th>
                            <th>Client Name</th>
                            <th>Remarks</th>
                            <th>Amount</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.report.map((value, index) => (
                            <tr>
                                <td key={index}>{index+1}</td>
                                <td>{moment(value.collection_date).format("MMMM Do, YYYY")}</td>
                                <td key={index}>{value.client_name.client_name}</td>
                                <td key={index}>{value.description}</td>
                                <td key={index}>{value.amount}</td>

                            </tr>
                        ))}
                        <tr>
                            <td colSpan="4"><strong>Total</strong></td>
                            <td><strong>{this.state.total}</strong></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}
