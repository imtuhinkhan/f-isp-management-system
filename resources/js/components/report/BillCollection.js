import React, { Component } from 'react'
import moment from 'moment'
import { PDFViewer,PDFDownloadLink } from '@react-pdf/renderer';
import BillCollectionPDF from './BillCollectionPDF'
export default class BillCollection extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             report:this.props.data,
             client:this.props.client,
             monthName:this.props.monthName,
             yearName:this.props.yearName
        }
    }
    render() {
        return (
            <>
            {/* <PDFDownloadLink document={<BillCollectionPDF data={this.state.report} client={this.state.client} monthName={this.state.monthName} yearName={this.state.yearName} />} fileName="bill_collection_report.pdf" style={{float:'right'}}>
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink> */}
                <table id="data-table" class="table">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Client Name</th>
                            <th>Phone</th>
                            <th>Package</th>
                            <th>Amount</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.client.map((value, index) => (
                            <tr>
                                <td key={index}>{index+1}</td>
                                <td>{value.client_name}</td>
                                <td>{value.phone}</td>
                                <td>{value.package.name}({value.package.price})</td>
                                <td>{this.state.report[value.id]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}
